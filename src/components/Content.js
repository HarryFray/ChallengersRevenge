import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NewPost from './NewPost';
import PostsList from './PostsList';
import Nav from './Nav';
import Post from './Post';

import '../style/style.css';

class Content extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <Wrapper >
          <Nav />
          <ContentWrapper>
            <Route exact path="/" component={PostsList} />
            <Route path="/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default Content;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  flex: 1;
  min-height:2000px;
`;

const ContentWrapper = styled.div`
  flex:1;
  display:flex;
  justify-content: center;
`;


