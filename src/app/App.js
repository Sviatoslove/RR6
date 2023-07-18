import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './layouts/HomePage';
import UsersListPage from './layouts/UsersListPage';
import UserPage from './layouts/UserPage';
import UserEditPage from './layouts/UserEditPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="usersListPage" element={<UsersListPage />}>
        <Route path=":userId" element={<UserPage />}>
          <Route path=":edit" element={<UserEditPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
