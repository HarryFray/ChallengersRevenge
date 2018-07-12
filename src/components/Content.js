import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Other from './Other';
import Main from './Main';
import Nav from './Nav';

import '../style/style.css';

class Content extends Component {
  render(props) {
    return (
      <BrowserRouter>
        <Wrapper >
          <Nav />
          <ContentWrapper>
            <Route exact path="/" component={Main} />
            <Route path="/other" component={Other} />
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
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color:grey;
  display:flex;
  justify-content: center;
`;


