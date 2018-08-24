import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import '../style/style.css';
import gql from 'graphql-tag';
import FB from '../style/icons/facebook.svg';
import link from '../style/icons/link.svg';
import twitter from '../style/icons/twitter.svg';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: this.props.post || this.props.location.state.post,
      isList: true
    }
  }

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
    })
  }

  render(props) {
    const { title, content, id, stars, date } = this.state.post

    const day = date.slice(8, 10);
    const month = date.slice(4, 8);
    const year = date.slice(10, 15);

    return (
      <Wrapper>
        <Link to={{
          pathname: `/post/${id}`,
          state: {
            post: this.state.post
          }
        }}>
          <h1 className='underline'>{title}</h1>
        </Link>
        <p>{content}</p>
        <hr />
        <h5>{`${month} ${day}, ${year}`}</h5>
        <Upvotes>
          <Star onClick={() => { this.onPostLike(id, stars) }} />
          <div>{stars}</div>
          <div style={{ 'flex': '1' }} />
          <div>
            <Icon src={FB} />
            <Icon className="twitter" src={twitter} />
            <Icon src={link} />
          </div>
        </Upvotes>
      </Wrapper>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mutation = gql`
mutation likePost($id: ID!){
  likePost(id: $id) {
    id
    stars
  }
}
`;

export default graphql(mutation)(Post)


const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 0 220px 0 220px;
  color: black;
hr {
  border-width: .5px;
  border-color: black;
  margin-bottom: 5px;
  width: 100%;
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

const Icon = styled.img`
 height: 30px;
 cursor: pointer;
 padding: 2px;
 
`;