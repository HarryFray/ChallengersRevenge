import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import '../style/style.css';

class App extends Component {
  render(props) {
    return (
      <div className="heading">
        <Content>
          Home
        </Content>
      </div>
    );
  }
}

export default App;

const Content = styled.div`

`

