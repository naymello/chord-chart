import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <a href="">{this.props.note}</a>
    );
  }
}

export default Note;
