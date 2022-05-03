import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Button, Input } from 'antd';
import Spinner from '../common/Spinner';

const GET_USER_NAME = gql`
  query GetUserName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const UserNameLazyLoading = () => {
  const [name, setName] = useState('');

  const [getLocations, { error, loading, data }] = useLazyQuery(GET_USER_NAME, {
    variables: {
      name,
    },
  });

  if (loading) return <Spinner />;
  console.log({ data });

  return (
    <div>
      <Input
        placeholder="what is the name?"
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        onClick={() => {
          getLocations();
        }}
      >
        search
      </Button>

      {name}
    </div>
  );
};

export default UserNameLazyLoading;
