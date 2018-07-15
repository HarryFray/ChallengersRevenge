import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../style/style.css';

class Nav extends Component {
  render(props) {
    return (
      <Wrapper>
        <Title>
          <Link className="title" to="/">Challengers Revenge</Link>
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
  height: 60px;
`;

const Title = styled.header`
      display: flex;
    `;

const Links = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
    div {
      padding: 10px;
    }
`;
