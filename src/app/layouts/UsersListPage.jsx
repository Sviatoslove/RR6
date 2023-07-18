import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const users = [
  'User 1',
  'User 2',
  'User 3',
  'User 4',
  'User 5',
  'User 6',
];

const UsersListPage = () => {
  const { userId } = useParams();
  return (
    <>
      {userId ? (
        <Outlet />
      ) : (
        <>
          <h1>Users list page</h1>
          <ul>
            {users.map((user, id) => (
              <li key={id}>
                <NavLink to={`/usersListPage/${id}`}>{user}</NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/">Home page</NavLink>
        </>
      )}
    </>
  );
};

export default UsersListPage;
