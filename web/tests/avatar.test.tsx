import { render, screen } from '@testing-library/react';
import Avatar, { AvatarProps } from '../app/components/Avatar';

test('renders avatar with initials when img prop is empty string' , () => {
  const props: AvatarProps = { alt: '', img: '', initials: 'KB' };
  render(<Avatar {...props} />);

  const initialsVersion = screen.getByText('KB');
  expect(initialsVersion).toBeInTheDocument();
  expect(initialsVersion).toHaveClass('font-medium text-gray-600 dark:text-gray-300');
});

test('renders avatar with initials limited to 2 characters', () => {
  const props: AvatarProps = { alt:'', img: '', initials: 'KiloBravo' };
  render(<Avatar {...props} />);

  const twoCharInitialVersion = screen.getByText('Ki');
  expect(twoCharInitialVersion).toBeInTheDocument();
  expect(twoCharInitialVersion).toHaveTextContent(/^Ki$/);
});

test('renders avatar with an image' , () => {
  const props: AvatarProps = { alt: '', img: 'https://example.com/avatar.jpg', initials: 'user avatar' };
  render(<Avatar {...props} />);

  const imgVersion = screen.getByAltText('user avatar');
  expect(imgVersion).toBeInTheDocument();
  expect(imgVersion).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  expect(imgVersion).toHaveClass('rounded-full h-10 w-10');
});

test('renders image with default alt text when alt is empty string', () => {
  const emptyAltProps: AvatarProps = { alt: '', img: 'https://example.com/avatar.jpg', initials: 'KB' };

  render(<Avatar {...emptyAltProps} />);
  const emptyAltVersion = screen.getByAltText('user avatar');
  expect(emptyAltVersion).toBeInTheDocument();
});
