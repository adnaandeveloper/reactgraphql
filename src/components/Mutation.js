import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button } from 'antd';

const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $age: Int!) {
    createProduct(record: { name: $name, age: $age }) {
      record {
        name
      }
    }
  }
`;

/** this is return value wich we have to spicify{
        
        record {
            name
        } 
        
        and we can't test this but it's very simple 
        */

function Mutation() {
  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: 'burger',
        age: 'many years',
      },
    }
  );
  return (
    <div>
      <Button onClick={() => createProduct()}>Add product</Button>
    </div>
  );
}

export default Mutation;
