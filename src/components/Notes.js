import React, { Component } from 'react';

import * as S from '../styles';

export class Notes extends Component {
  render() {
    return (
      <S.Notes>
        {this.props.notes.map(note => {
          return (
            <div key={note.id}>
              <input
                type="radio"
                id={note.name}
                name="note"
                value={note.name}
                onChange={this.props.handleChange}
              />
              <label for={note.name}>{note.name}</label>
            </div>
          );
        })}
      </S.Notes>
    );
  }
}

export default Notes;
