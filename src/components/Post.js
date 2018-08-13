import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import '../style/style.css';
import gql from 'graphql-tag';
import FB from '../style/icons/facebook.svg';
import link from '../style/icons/link.svg';
import Git from '../style/icons/git.png';
import { Link } from 'react-router-dom';
import query from '../queries/PostQuery';

class Post extends Component {

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

  render(props) {

    const statePostList = this.props.post;
    const stateSinglePost = this.props.location ? this.props.location.state.post : null;

    if (!statePostList && !stateSinglePost) {
      return (<div>.....shit just a sec</div>)
    }

    const { title, content, id, stars, date } = statePostList || stateSinglePost;

    const day = date.slice(8, 10);
    const month = date.slice(4, 8);
    const year = date.slice(10, 15);

    return (
      <div>
        <Link to={{
          pathname: `/post/${id}`,
          state: {
            post: this.props.post
          }
        }}>
          <h1 className='underline'>{title}</h1>
        </Link>
        <p>{content}</p>
        <hr />
        <h5>{`${month} ${day}, ${year}`}</h5>
        <Upvotes>
          <Star onClick={() => this.onPostLike(id, stars)} />
          <StarCount>{stars}</StarCount>
          <div style={{ 'flex': '1' }} />
          <div>
            <Icon src={FB} />
            <Icon src={link} />
            <Icon src={Git} />
          </div>
        </Upvotes>
      </div>
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

export default graphql(mutation)(Post)

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
transition: 500ms;

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