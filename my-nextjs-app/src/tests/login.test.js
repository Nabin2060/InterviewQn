
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/auth';

jest.mock('../utils/auth', () => ({
  login: jest.fn(),
}));

test('renders login form and handles login', () => {
  login.mockImplementation((username, password) => username === 'user' && password === 'password');

  render(<LoginForm />);

  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Login'));

  expect(login).toHaveBeenCalledWith('user', 'password');
});
