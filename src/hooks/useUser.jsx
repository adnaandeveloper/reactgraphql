import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  query GetUser($id: ID!) {
    character(id: $id) {
      name
    }
  }
`;

export const useUser = (id) => {
  const { error, loading, data } = useQuery(GET_USER, {
    variables: { id: id },
  });

  return {
    error,
    loading,
    data,
  };
};
