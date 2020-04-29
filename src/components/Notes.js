import React, { Component } from 'react';

import * as S from '../styles';

export class Notes extends Component {
  render() {
    return (
      <S.Chords>
        {this.props.notes.map(note => {
          return (
            <div key={note.id}>
              <input
                type="radio"
                id={note.name}
                name="note"
                value={note.name}
                onChange={this.props.handleNoteChange}
              />
              <label
                style={{ color: note.name === this.props.selectedNote ? '#3B93BF' : '#001724' }}
                htmlFor={note.name}
              >
                {note.name}
              </label>
            </div>
          );
        })}
      </S.Chords>
    );
  }
}

export default Notes;
