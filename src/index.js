/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './style/style.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className='heading'>
      <Header />
      <Content />
      <Footer />
    </div>
  </ApolloProvider>

  , document.getElementById('root'),
);



