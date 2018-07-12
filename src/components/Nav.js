import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../style/style.css';

class Nav extends Component {
  render(props) {
    return (
      <Wrapper>
        <div><Link to="/">Main</Link></div>
        <div><Link to="/other">Other</Link></div>
      </Wrapper>
    );
  }
}

export default Nav


const Wrapper = styled.nav`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  div {
    padding:10px;
  }
`;
