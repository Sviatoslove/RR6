import React from 'react';
import { NavLink, Navigate, Outlet, useParams } from 'react-router-dom';
import { users } from './UsersListPage';

const UserPage = () => {
  const { userId, edit } = useParams();

  const display = edit === 'edit';

  if ((edit !== undefined && !display) || userId > users.length - 1) {
    return <Navigate to="/usersListPage" />;
  }

  return (
    <>
      {display ? (
        <Outlet />
      ) : (
        <>
          <h1>User Page: {users[userId]}</h1>
          <ul>
            <li>
              <NavLink to={`/usersListPage/${userId}/edit`}>
                User edit page
              </NavLink>
            </li>
            <li>
              <NavLink to="/usersListPage">Users list page</NavLink>
            </li>
          </ul>
          <span>User id: {userId}</span>
        </>
      )}
    </>
  );
};

export default UserPage;
