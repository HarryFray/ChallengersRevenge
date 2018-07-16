import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import '../style/style.css';
import PostQuery from '../queries/PostQuery';
import gql from 'graphql-tag';

import FB from '../style/icons/facebook.svg';
import Link from '../style/icons/link.svg';
import Git from '../style/icons/git.png';



class PostsList extends Component {

  onPostLike(id, stars) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typname: 'Mutation',
        likePost: {
          id,
          stars: stars + 1,
          __typename: 'PostType'
        }
      }
    });
  }

  getAllPosts() {
    return this.props.data.posts.map(({ title, content, id, stars }) => {
      return (
        <div key={id}>
          <h1>{title}</h1>
          <p>{content}</p>
          <hr />
          <h5>July 10, 2018</h5>
          <Upvotes>
            <Star onClick={() => this.onPostLike(id, stars)} />
            <StarCount>{stars}</StarCount>
            <div style={{ 'flex': '1' }} />
            <div>
              <Icon src={FB} />
              <Icon src={Link} />
              <Icon src={Git} />
            </div>
          </Upvotes>
        </div>
      )
    })
  }



  render() {
    if (!this.props.data.posts) { return <div>loading...</div> }
    return (
      <Wrapper>
        <div>{this.getAllPosts()}</div>
      </Wrapper>
    )
  }
}

const mutation = gql`
mutation likePost($id: ID!){
  likePost(id: $id) {
    id
    stars
  }
}
`;

export default graphql(mutation)(
  graphql(PostQuery)(PostsList)
);

const Wrapper = styled.div`
  display:flex;
  max-width: 1000px;
  padding: 0 220px 0 220px;
  color: black;
hr {
  border-width: .5px;
  border-color: #212529;
  margin-bottom: 5px;
}
h1 {
  letter-spacing: -1px;
  margin-bottom: 0px;
  :hover{
    text-decoration:underline;
    cursor: pointer;
  }
}

h5 {
  margin: 0 0 15px 0;
}
p {
  line-height: 1.6;
  font-size: 16px;
}
`;

const Upvotes = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  padding-bottom: 50px;
`;

const Star = styled.div`
background:black;
margin-right: 10px;
height:30px;
width: 30px;
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

-webkit-transition: width .5s ease, height .5s ease;
-moz-transition: width .5s ease, height .5s ease;
-o-transition: width .5s ease, height .5s ease;
-ms-transition: width .5s ease, height .5s ease;
transition: width .5s ease, height .5s ease;

:hover {
  cursor: pointer;
  height:35px;
  width: 35px;
}
:active {
  background: white;
}
`;

const StarCount = styled.div`
  margin-left: 0px;
`;

const Icon = styled.img`
 height: 30px;
 cursor: pointer;
 padding: 2px;
`;

// <p>I created this site not out of spite but as a way for me to learn and grow. Every time I fail a code challenge, I will add the tech
// that I failed to use properly to this site. This will be a length process as there are many tough challenges ahead. Maybe failed is a strong word....
// Painfully learned? in any case I hope this is entertaining stuff. ps. im not the best in spelling
// or grammer so this will be a practice in that as well. enjoy!</p>