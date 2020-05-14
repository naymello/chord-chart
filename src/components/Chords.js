import React, { Component } from 'react';

import * as S from '../styles';

export class Chords extends Component {
  chordTypes = ['m', '7', 'm7', 'maj7', 'mM7', '6', 'm6', '6/9', '5', '9', 'm9', 'maj9', '11', 'm11', '13',
    'm13', 'maj13', 'add2', 'add9', '7-5', '7+5', 'sus2', 'sus4', 'dim', 'dim7', 'm7b5', 'aug', 'aug7']

  render() {
    const { showAll, toggleShowAll, selectedNote, handleChordChange } = this.props;

    return (
      <React.Fragment>
        <S.Text
          onClick={toggleShowAll}
        >
          {showAll ? 'Hide' : 'Show'} all {selectedNote} chords
        </S.Text>

        <S.GridForm desktopColumns="6">
          {this.chordTypes.map(chordType => {
            const chordName = `${selectedNote}${chordType}`;

            return (
              <div key={chordType} style={{ display: showAll ? 'block' : 'none' }}>
                <input
                  type="radio"
                  id={chordType}
                  name="chord"
                  value={chordType}
                  onClick={handleChordChange}
                />
                <label htmlFor={chordType}>
                  {chordName}
                </label>
              </div>
            );
          })}
        </S.GridForm>
      </React.Fragment>
    );
  }
}

export default Chords;
