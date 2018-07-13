import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../style/style.css';

class Nav extends Component {
  render(props) {
    return (
      <Wrapper>
        <Title className="shine">
          Challengers Revenge
        </Title>
        <div style={{ 'flex': '1' }} />
        <Links>
          <div><Link className='link' to="/">Main</Link></div>
          <div><Link className='link' to="/new">New</Link></div>
          <div className='link'>Top</div>
        </Links>
      </Wrapper>
    );
  }
}

export default Nav


const Wrapper = styled.nav`
  background-color: #05386B;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width:100%;
  height: 55px;
`;

const Title = styled.header`
      display: flex;
      color: #edf5e1;
      font-size: 50px;
      letter-spacing: -5px;
      padding-bottom: 9px;
      text-decoration: underline;
      padding: 0 10px 0 5px;
    `;

const Links = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
    div {
      padding: 10px;
    }
`;
