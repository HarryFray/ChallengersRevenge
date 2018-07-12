/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './components/App';
import Other from './components/Other';
import Nav from './components/Nav';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';


const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Header></Header>
        <Nav></Nav>
        <Route exact path="/" component={App} />
        <Route path="/other" component={Other} />
      </div>
    </BrowserRouter>
  </ApolloProvider>

  , document.getElementById('root'),
);

