import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div>
        <input type="radio" id={this.props.name} name="note" value={this.props.name} />
        <label for={this.props.name}>{this.props.name}</label>
      </div>
    );
  }
}

export default Note;
