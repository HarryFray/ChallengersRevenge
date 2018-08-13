import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import PostsQuery from '../queries/PostsQuery';
import Post from './Post';

class PostsList extends Component {

  render() {
    if (!this.props.data.posts) { return <div>loading....</div> }
    return (

      <div>
        {this.props.data.posts.map((post) => {
          return (<Post key={post.id} post={post}></Post>)
        })}
      </div>

    )
  }
}

export default graphql(PostsQuery)(PostsList)
