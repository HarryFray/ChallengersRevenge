import React, { Component } from 'react';
import styled from 'styled-components';
import '../style/style.css';
import axios from 'axios';

class MovieBookList extends Component {



  getBooks() {
    axios.get('http://localhost:8080/api/rest/books')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render(props) {
    return (
      <Wrapper>
        <div onClick={this.getBooks}>Books</div>
      </Wrapper>
    )
  }
}

export default (MovieBookList);

const Wrapper = styled.div`
width: 300px;
height; 100px;
background-color: #379683;
`;