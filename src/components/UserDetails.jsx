import React from 'react';
import { useUser } from '../hooks/useUser';

const UserDetails = () => {
  const { error, loading, data } = useUser(2);
  console.log({ error, loading, data });
  return (
    <div>
      <h1> soon </h1>
    </div>
  );
};

export default UserDetails;
