import React from 'react';
import { Button } from 'antd';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import UserNameLazyLoading from './components/UserNameLazyLoading';
const App = () => {
  return (
    <div>
      <Button type="primary"> button </Button>
      <UserNameLazyLoading />
      <UsersList />
      <UserDetails />
    </div>
  );
};

export default App;
