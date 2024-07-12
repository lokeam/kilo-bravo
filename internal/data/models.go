package data

import (
	"context"
	"database/sql"
	"errors"
	"net/http"
	"strings"
	"time"
)


const dbTimeout = time.Second * 3
var db *sql.DB

func New(dbPool *sql.DB) Models {
	db = dbPool
	return Models{
		User:  User{},
		Token: Token{},
	}
}

type Models struct {
	User  User
	Token Token
}

type User struct {
	ID        int       `json:"id"`
	Email     string    `json:"email"`
	FirstName string    `json:"first_name,omitempty"`
	LastName  string    `json:"last_name,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Token struct {
	ID           int       `json:"id"`
	UserID       int       `json:"user_id"`
	RefreshToken string    `json:"refresh_token"`
	TokenExpiry  time.Time `json:"token_expiry"`
}

func (u *User) Insert(user User) (int, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	var newId int
	statement := `INSERT INTO users (email, first_name, last_name, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5) RETURNING id`
	err := db.QueryRowContext(ctx, statement,
		user.Email,
		user.FirstName,
		user.LastName,
		time.Now(),
		time.Now(),
	).Scan(&newId)
	if err != nil {
		return 0, err
	}

	return newId, nil
}

func (u *User) GetByEmail(email string) (*User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `SELECT id, email, first_name, last_name, created_at, updated_at FROM users WHERE email = $1`

	var user User
	row := db.QueryRowContext(ctx, query, email)

	err := row.Scan(
			&user.ID,
			&user.Email,
			&user.FirstName,
			&user.LastName,
			&user.CreatedAt,
			&user.UpdatedAt,
	)

	if err != nil {
			return nil, err
	}

	return &user, nil
}

func (u *User) GetByUserId(id int) (*User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `SELECT id, email, first_name, last_name, password, created_at, updated_at FROM users WHERE id = $1`

	var user User
	row := db.QueryRowContext(ctx, query, id)

	err := row.Scan(
			&user.ID,
			&user.Email,
			&user.FirstName,
			&user.LastName,
			&user.CreatedAt,
			&user.UpdatedAt,
	)

	if err != nil {
			return nil, err
	}

	return &user, nil
}

func (u *User) GetAll() ([]*User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `select id, email, first_name, last_name, password, created_at, updated_at from users order by last_name`

	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []*User

	for rows.Next() {
		var user User
		err := rows.Scan(
			&user.ID,
			&user.Email,
			&user.FirstName,
			&user.LastName,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		users = append(users, &user)
	}

	return users, nil
}

func (u *User) Update() error {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	statement := `update users set
						email = $1,
						first_name = $2,
						last_name = $3,
						update_at = $4
						where id = $5
	`
	_, err := db.ExecContext(ctx, statement,
		u.Email,
		u.FirstName,
		u.LastName,
		time.Now(),
		u.ID,
	)

	if err != nil {
		return err
	}

	return nil
}

func (u *User) Delete() error {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	statement := `delete from users where id = $1`

	_, err := db.ExecContext(ctx, statement, u.ID)

	if err != nil {
		return err
	}

	return nil
}

func (t *Token) Insert(token Token) error {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	statement := `INSERT INTO tokens (user_id, refresh_token, token_expiry)
		VALUES ($1, $2, $3)`
	_, err := db.ExecContext(ctx, statement,
		token.UserID,
		token.RefreshToken,
		token.TokenExpiry,
	)
	if err != nil {
		return err
	}

	return nil
}


func (t *Token) GetByToken(plainText string) (*Token, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `select id, user_id, email, token, refresh_token, created_at, updated_at, token_expiry from tokens where token = $1`

	var token Token
	row := db.QueryRowContext(ctx, query, plainText)
	err := row.Scan(
		&token.ID,
		&token.UserID,
		&token.RefreshToken,
	)

	if err != nil {
		return nil, err
	}

	return &token, nil
}

func (t *Token) GetUserForToken(token Token) (*User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `SELECT id, email, first_name, last_name, created_at, updated_at FROM users WHERE id = $1`

	var user User
	row := db.QueryRowContext(ctx, query, token.UserID)

	err := row.Scan(
		&user.ID,
		&user.Email,
		&user.FirstName,
		&user.LastName,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (t *Token) AuthenticateToken(request *http.Request) (*User, error) {
	authorizationHeader := request.Header.Get("Authorization")
	if authorizationHeader == "" {
		return nil, errors.New("no authorization header received")
	}

	headerSections := strings.Split(authorizationHeader, " ")
	if len(headerSections) != 2 || headerSections[0] != "Bearer" {
		return nil, errors.New("no valid authorization header received")
	}

	token := headerSections[1]

	dbToken, err := t.GetByToken(token)
	if err != nil {
		return nil, errors.New("no matching token found")
	}

	if dbToken.TokenExpiry.Before(time.Now()) {
		return nil, errors.New("token has expired")
	}

	user, err := t.GetUserForToken(*dbToken)
	if err != nil {
		return nil, errors.New("no matching user found")
	}

	return user, nil
}

func (t *Token) DeleteByToken(plainText string) error {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	statement := `DELETE FROM tokens WHERE refresh_token = $1`

	_, err := db.ExecContext(ctx, statement, plainText)
	if err != nil {
		return err
	}

	return nil
}

func (t *Token) ValidToken(plainText string) (bool, error) {
	token, err := t.GetByToken(plainText)
	if err != nil {
		return false, errors.New("no matching token found")
	}

	_, err = t.GetUserForToken(*token)
	if err != nil {
		return false, errors.New("no matching user found")
	}

	if token.TokenExpiry.Before(time.Now()) {
		return false, errors.New("expired token")
	}

	return true, nil
}