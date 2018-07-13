import React, { Component } from 'react';
import styled from 'styled-components';
import '../style/style.css';

const Main = () => (
  <Wrapper>
    <div>
      <h1>This is a blog about failures</h1>
      <p>I created this site not out of spite but as a way for me to learn and grow. Every time I fail a code challenge, I will add the tech
      that I failed to use properly to this site. This will be a length process as there are many tough challenges ahead. Maybe failed is a strong word....
      Painfully learned? in any case I hope this is entertaining stuff. ps. im not the best in spelling
  or grammer so this will be a practice in that as well. enjoy!</p>
      <hr />
      <h5>July 10, 2018</h5>
      <div>
        <Upvotes>
          <Star />
          1,023
      </Upvotes>
      </div>
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
h1 {
  letter-spacing: -1px;
  :hover{
    text-decoration:underline;
    cursor: pointer;
  }
}

h5 {
  margin: 0 0 15px 0;
}
`;

const Upvotes = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

const Star = styled.div`
background:black;
margin-right: 10px;
height:30px;
width: 30px;
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

-webkit-transition: width .5s ease, height .5s ease;
-moz-transition: width .5s ease, height .5s ease;
-o-transition: width .5s ease, height .5s ease;
-ms-transition: width .5s ease, height .5s ease;
transition: width .5s ease, height .5s ease;

:hover {
  cursor: pointer;
  height:40px;
  width: 40px;
}
:active {
  background: white;
}
`;