import React, { Component } from 'react';

import * as S from '../styles';

export class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { id: 1, name: 'C' },
        { id: 2, name: 'C#' },
        { id: 3, name: 'D' },
        { id: 4, name: 'D#' },
        { id: 5, name: 'E' },
        { id: 6, name: 'F' },
        { id: 7, name: 'F#' },
        { id: 8, name: 'G' },
        { id: 9, name: 'G#' },
        { id: 10, name: 'A' },
        { id: 11, name: 'A#' },
        { id: 12, name: 'B' }
      ]
    }
  }

  render() {
    return (
      <S.Chords>
        {this.state.notes.map(note => {
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
