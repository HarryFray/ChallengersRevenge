import React, { Component } from 'react';
import '../style/style.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PostQuery from '../queries/PostQuery';
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title,
        content: this.state.content
      },
      refetchQueries: [{ PostQuery }]
    })
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

const mutation = gql`
 mutation AddPost($title: String, $content: String){
  addPost(title: $title, content: $content) {
    title
    content
  }
}`;

export default graphql(mutation)(NewPost);
