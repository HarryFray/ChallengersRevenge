import React, { Component } from 'react';
import styled from 'styled-components';
import '../style/style.css';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
          <label>Content</label>
          <input
            onChange={e => this.setState({ content: e.target.value })}
            value={this.state.content}
          />
        </form>
        <button onClick={this.onSubmit}>Submit</button>
      </div>

    )
  }
}

export default New
