import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


var scroll = require('scroll')
var page = require('scroll-doc')()
var ease = require('ease-component')

import '../style/style.css';

class Nav extends Component {

  onClickScroll() {
    scroll.top(page, 0, (err, scrollTop) => {
      if (err) {
        scroll.top(page, 6, { duration: 200 }, (err) => {
          scroll.top(page, 0, { duration: 150 }, (err) => {
          })
        })
      }
    })
  }

  render(props) {
    return (
      <div>
        <Wrapper>
          <Title>
            <Link className="title" to="/">Challengers Revenge</Link>
          </Title>
          <div style={{ 'flex': '1' }} />
          <Links>
            <div><Link className='link' to="/">Main</Link></div>
            <div><Link className='link' to="/new">New</Link></div>
            <div onClick={this.onClickScroll} className='link'>Top</div>
          </Links>
        </Wrapper>
        <SolidGreyLine />


      </div>
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

  @media only screen and (max-width: 1000px) {
    height: 90px;
    align-items: flex-start;
  }
`;

const Title = styled.header`
      display: flex;
    `;

const Links = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
    div {
      padding-right: 10px;
    }

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      padding-top: 0px;
    }
`;

const SolidGreyLine = styled.div`
  height:10px;
  background-color:#379683;
`;

const SolidCreamLine = styled.div`
  height:10px;
  background-color:#edf5e1;
`;
