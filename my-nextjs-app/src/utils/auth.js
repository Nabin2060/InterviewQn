
import cookies from 'js-cookie';

const hardcodedUser = {
  username: 'user',
  password: 'password',
};

export const login = async (username, password) => {
  if (username === hardcodedUser.username && password === hardcodedUser.password) {
    cookies.set('token', 'fake-jwt-token', { expires: 1 });
    return true;
  }
  return false;
};

export const logout = () => {
  cookies.remove('token');
};

export const isAuthenticated = () => {
  return !!cookies.get('token');
};
