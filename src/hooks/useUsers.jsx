import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useUsers = () => {
  const { error, loading, data } = useQuery(GET_USERS);

  return {
    error,
    loading,
    data,
  };
};
