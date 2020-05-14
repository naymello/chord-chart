import React, { Component } from 'react';

import * as S from '../styles';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import pianoC24 from '../assets/24-c-piano.svg';
import pianoF24 from '../assets/24-f-piano.svg';
import pianoC29 from '../assets/29-c-piano.svg';
import pianoF31 from '../assets/31-f-piano.svg';

export class Piano extends Component {
  pianoNotes = [
    { id: 'C1', note: 'C' },
    { id: 'C-sharp1', note: 'C#' },
    { id: 'D1', note: 'D' },
    { id: 'D-sharp1', note: 'D#' },
    { id: 'E1', note: 'E' },
    { id: 'F1', note: 'F' },
    { id: 'F-sharp1', note: 'F#' },
    { id: 'G1', note: 'G' },
    { id: 'G-sharp1', note: 'G#' },
    { id: 'A1', note: 'A' },
    { id: 'A-sharp1', note: 'A#' },
    { id: 'B1', note: 'B' },
    { id: 'C2', note: 'C' },
    { id: 'C-sharp2', note: 'C#' },
    { id: 'D2', note: 'D' },
    { id: 'D-sharp2', note: 'D#' },
    { id: 'E2', note: 'E' },
    { id: 'F2', note: 'F' },
    { id: 'F-sharp2', note: 'F#' },
    { id: 'G2', note: 'G' },
    { id: 'G-sharp2', note: 'G#' },
    { id: 'A2', note: 'A' },
    { id: 'A-sharp2', note: 'A#' },
    { id: 'B2', note: 'B' },
    { id: 'C3', note: 'C' },
    { id: 'C-sharp3', note: 'C#' },
    { id: 'D3', note: 'D' },
    { id: 'D-sharp3', note: 'D#' },
    { id: 'E3', note: 'E' },
    { id: 'F3', note: 'F' },
    { id: 'F-sharp3', note: 'F#' },
    { id: 'G3', note: 'G' },
    { id: 'G-sharp3', note: 'G#' },
    { id: 'A3', note: 'A' },
    { id: 'A-sharp3', note: 'A#' },
    { id: 'B3', note: 'B' }
  ];

  semitoneIntervalsArr = [
    ['5', [0, 7]],
    ['', [0, 4, 7]],
    ['m', [0, 3, 7]],
    ['sus2', [0, 5, 7]],
    ['sus4', [0, 2, 7]],
    ['dim', [0, 3, 6]],
    ['aug', [0, 4, 8]],
    ['7', [0, 4, 7, 10]],
    ['m7', [0, 3, 7, 10]],
    ['maj7', [0, 4, 7, 11]],
    ['mM7', [0, 3, 7, 11]],
    ['6', [0, 4, 7, 9]],
    ['m6', [0, 3, 7, 9]],
    ['add2', [0, 2, 4, 7]],
    ['add9', [0, 4, 7, 14]],
    ['7-5', [0, 4, 6, 10]],
    ['7+5', [0, 4, 8, 10]],
    ['dim7', [0, 3, 6, 9]],
    ['m7b5', [0, 3, 6, 10]],
    ['aug7', [0, 4, 8, 10]],
    ['6/9', [0, 4, 7, 9, 14]],
    ['9', [0, 4, 7, 10, 14]],
    ['m9', [0, 3, 7, 10, 14]],
    ['maj9', [0, 4, 7, 11, 14]],
    ['11', [0, 4, 7, 10, 14, 17]],
    ['m11', [0, 3, 7, 10, 14, 17]],
    ['maj13', [0, 4, 7, 11, 14, 21]],
    ['13', [0, 4, 7, 10, 14, 17, 21]],
    ['m13', [0, 3, 7, 10, 14, 17, 21]]
  ];

  semitoneIntervals = new Map(this.semitoneIntervalsArr);

  /* makeChord method makes chords based on the index of the root (first/lowest note) of a chord.
  The other notes are got by simply adding the interval (in semitones) to it. */
  makeChord = (selectedNote, chordType) => {
    const rootIndex = this.pianoNotes.findIndex(noteObj => noteObj.note === selectedNote);
    const chordIntervals = this.semitoneIntervals.get(chordType);
    const chordNotesIndex = chordIntervals.map(interval => rootIndex + interval);
    const chordNotesIds = chordNotesIndex.map(index => this.pianoNotes[index].id);
    const chordNotesNames = chordNotesIndex.map(index => this.pianoNotes[index].note);

    return [chordNotesIds, chordNotesIndex, chordNotesNames];
  }

  /* pickPiano method returns the ideal piano SVG to the chord to be displayed as some chords 
  don't fit the size of some piano SVGs. */
  pickPiano = (chordNotesIndex) => {
    const firstItem = chordNotesIndex[0];
    const lastItem = chordNotesIndex[chordNotesIndex.length - 1];

    if (lastItem <= 23) {
      return pianoC24;
    } else if (firstItem >= 4 && lastItem <= 27) {
      return pianoF24;
    } else if (lastItem <= 28) {
      return pianoC29;
    } else {
      return pianoF31;
    }
  }

  render() {
    const { selectedNote, selectedChordType } = this.props;

    const pianoStyle = {
      margin: '15px 20px',
      width: 'calc(100% - 40px)',
      height: 'auto'
    }

    const [chordNotesIds, chordNotesIndex, chordNotesNames] = this.makeChord(selectedNote, selectedChordType);
    const piano = this.pickPiano(chordNotesIndex);

    const chordName = `${selectedNote}${selectedChordType}`;

    return (
      <React.Fragment>
        <S.Text style={{ fontSize: '18px' }}>
          {`${chordName} piano chord`}
        </S.Text>

        <SvgLoader style={pianoStyle} path={piano}>
          {/* This resets the piano to its original color.
          Otherwise, the previous selected chords would appear
          along with the new ones, making it unreadable*/}
          <SvgProxy selector=".white-key" fill="none" />
          <SvgProxy selector=".black-key" fill="#001724" />

          {chordNotesIds.map(note => (
            <SvgProxy key={note} selector={`#${note}`} fill="#3B93BF" />
          ))}
        </SvgLoader>

        <S.Text>
          Notes:
          {chordNotesNames.map(name => (
            <S.Text key={name} style={{ margin: '5px' }}>
              {name}
            </S.Text>
          ))}
        </S.Text>
      </React.Fragment>
    );
  }
}

export default Piano;
