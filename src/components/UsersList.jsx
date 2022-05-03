import React from 'react';
import Spinner from '../common/Spinner';
import { Card, Row, Col } from 'antd';
import { useUsers } from '../hooks/useUsers';

//we are going to query for users here
//inshaa allaah
const UsersList = () => {
  const { error, loading, data } = useUsers();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Row justify="space-evenly">
      {data.characters.results.map((user) => (
        <Card
          title={user.name}
          bordered={false}
          style={{ width: 300 }}
          key={user.id}
        >
          <Col span={6}>
            <img src={user.image} />
          </Col>
        </Card>
      ))}
    </Row>
  );
};

export default UsersList;

// 1. we use usequery hook from @apollo/client wich we install
//2. inport gql also

// remember template literals is used  after gpl
