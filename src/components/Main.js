import React, { Component } from 'react';
import styled from 'styled-components';
import '../style/style.css';

const Main = () => (
  <Wrapper>
    <div>
      <h1>This is a blog about failures</h1>
      <p>I created this site not out of spite but as a way for me to learn and grow. Every Code challenge I fail I will add the tech
      that I failed to use properly to this site. I'm exvited to tell you all about it as I failed many a time working on code projects.
      Perhaps failed is a strong word.... Painfully learned? in any case I hope this is entertaining stuff. ps. im not the best in spelling
  or grammer so this will be a practice in that as well. enjoy!</p>
      <hr />
      <h5>July 10, 2018</h5>
    </div>
  </Wrapper>
)

export default Main

const Wrapper = styled.div`
  display:flex;
  max-width: 1000px;
  padding: 0 220px 0 220px;
  color: black;
hr {
  border-width: .5px;
  border-color: #212529;
  margin-bottom: 5px;
}

h5 {
  margin-top:0px;
}
`;