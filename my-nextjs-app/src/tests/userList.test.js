// tests/userList.test.js
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../components/UserList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ])
  })
);

test('renders users fetched from API', async () => {
  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});

test('displays error message when fetch fails', async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error('Failed to fetch'))
  );

  render(<UserList />);
  await waitFor(() => {
    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });
});
