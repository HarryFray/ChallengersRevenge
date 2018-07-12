import React, { Component } from 'react';
import styled from 'styled-components';
import '../style/style.css';

class Header extends Component {
  render(props) {
    return (
      <Wrapper>
        <HeaderNav>
          SiteHome Signup Login
        </HeaderNav>
        <div>
          Where am I?
        </div>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 150px;
  background-color: grey;
`;

const HeaderNav = styled.div`
  background-color: orange;
  height: 100px;
`;