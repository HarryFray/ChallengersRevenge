import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../style/style.css';

class Nav extends Component {
  render(props) {
    return (
      <Wrapper>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/other">Other</Link></li>
      </Wrapper>
    );
  }
}

export default Nav


const Wrapper = styled.nav`
color: green;
`