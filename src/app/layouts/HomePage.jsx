import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <NavLink to="/usersListPage">Users list page</NavLink>
    </>
  );
};

export default HomePage;
