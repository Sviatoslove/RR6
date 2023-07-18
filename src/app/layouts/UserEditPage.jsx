import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { users } from './UsersListPage';

const UserEditPage = () => {
  const { userId } = useParams();

  const goToUserPage = () => {
    return +userId + 1 === users.length ? 0 : +userId + 1;
  };
  return (
    <>
      <h1>Edit page {users[userId]}</h1>
      <ul>
        <li>
          <NavLink to={`/usersListPage/${userId}`}>User page</NavLink>
        </li>
        <li>
          <NavLink to={`/usersListPage/${goToUserPage()}`}>
            Another user page
          </NavLink>
        </li>
        <li>
          <NavLink to="/usersListPage">Users list page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserEditPage;
