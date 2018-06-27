import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import '../style/style.css';

class App extends Component {
  getEmployees() {
    return this.props.data.employees.map(employee => <li key={employee.id}>{employee.name}</li>);
  }

  render(props) {
    if (this.props.data.loading) return (<div>loading</div>);
    return (
      <Wrapper>
        <Header>

          <img className="image" src={require('../style/img/React.png')} alt='' />
          <img className="image" src={require('../style/img/Mongo.png')} alt='' />
          <img className="image" src={require('../style/img/GraphQL.png')} alt='' />

        </Header>
        <ul>
          {this.getEmployees()}
        </ul>
        REACT - MONGODB - GRAPHQL
      </Wrapper>
    );
  }
}

const query = gql`
{
          employees{
        name
        id
      }
    } 
    `;

export default graphql(query)(App);


const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: linear-gradient(black, grey);
      color: white;
      justify-content:flex-start;
      align-items: center;
      font-size: 5vw;
    `;

const Header = styled.div`
display:flex;
      background-color: white;
      flex-basis: 200px;
      justify-content: center;
      align-items: center;
      width: 100vw;

      @media screen and (max-width: 550px) {
        flex-direction: column;
        flex-basis: 550px;
        
        }
`;
