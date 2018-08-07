import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import PostsQuery from '../queries/PostsQuery';
import Post from './Post';

class PostsList extends Component {

  render() {
    if (!this.props.data.posts) { return <div>loading...</div> }
    return (
      <Wrapper>
        <div>
          {this.props.data.posts.map((post) => {
            return (<Post key={post.id} post={post}></Post>)
          })}
        </div>
      </Wrapper>
    )
  }
}

export default graphql(PostsQuery)(PostsList)

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
}
h1:hover{
  cursor: pointer;
}

h5 {
  margin: 0 0 15px 0;
}
p {
  line-height: 1.6;
  font-size: 16px;
}

@media only screen and (max-width: 1000px) {
  padding: 0 100px 0 50px;
}
`;
