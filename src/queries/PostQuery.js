import gql from 'graphql-tag';

export default gql`
{
  post(id: $id){
    id
    title
    content
    stars
    date
  }
}
`;