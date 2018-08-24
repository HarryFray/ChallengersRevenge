import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import PostsQuery from '../queries/PostsQuery';
import Post from './Post';
import PropTypes from "prop-types";


class PostsList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    if (!this.props.data.posts) { return <div>loading....</div> }
    return (

      <div>
        {this.props.data.posts.map((post) => {
          return (<Post key={post.id} post={post} ></Post>)
        })}
      </div>

    )
  }
}

export default graphql(PostsQuery)(PostsList)
