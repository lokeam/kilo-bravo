import { http, HttpResponse, RequestHandler } from 'msw';

export const oauthHandlers: RequestHandler[] = [
  http.get('https://accounts.google.com/o/oauth2/v2/auth', ({ request }) => {
    // Redirect to cb URL w/ mock auth code
    const redirectUri = new URL(request.url).searchParams.get('redirect_uri');

    if (!redirectUri) {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'Missing redirect_uri parameter'
      });
    }

    return new HttpResponse(null, {
      status: 302,
      headers: {
        'Location': `${redirectUri}?code=mockAuthCode`
      }
    });
  }),
  http.post('http://localhost:8081/auth/oauth/callback', () => {
    // Simulate code/token exchange
    return HttpResponse.json(
      {
        accessToken: 'mockAccessToken',
        refeshToken: 'mockRefreshToken',
        expiresIn: 3600,
      },
      {
        status: 200
      }
    );
  })
];
