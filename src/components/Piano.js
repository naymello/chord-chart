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

  getSemitoneIntervals = chordType => {
    let semitoneInterval;

    switch (chordType) {
      case '5': return semitoneInterval = [0, 7];
      case '': return semitoneInterval = [0, 4, 7];
      case 'm': return semitoneInterval = [0, 3, 7];
      case 'sus2': return semitoneInterval = [0, 5, 7];
      case 'sus4': return semitoneInterval = [0, 2, 7];
      case 'dim': return semitoneInterval = [0, 3, 6];
      case 'aug': return semitoneInterval = [0, 4, 8];
      case '7': return semitoneInterval = [0, 4, 7, 10];
      case 'm7': return semitoneInterval = [0, 3, 7, 10];
      case 'maj7': return semitoneInterval = [0, 4, 7, 11];
      case 'mM7': return semitoneInterval = [0, 3, 7, 11];
      case '6': return semitoneInterval = [0, 4, 7, 9];
      case 'm6': return semitoneInterval = [0, 3, 7, 9];
      case 'add2': return semitoneInterval = [0, 2, 4, 7];
      case 'add9': return semitoneInterval = [0, 4, 7, 14];
      case '7-5': return semitoneInterval = [0, 4, 6, 10];
      case '7+5': return semitoneInterval = [0, 4, 8, 10];
      case 'dim7': return semitoneInterval = [0, 3, 6, 9];
      case 'm7b5': return semitoneInterval = [0, 3, 6, 10];
      case 'aug7': return semitoneInterval = [0, 4, 8, 10];
      case '6/9': return semitoneInterval = [0, 4, 7, 9, 14];
      case '9': return semitoneInterval = [0, 4, 7, 10, 14];
      case 'm9': return semitoneInterval = [0, 3, 7, 10, 14];
      case 'maj9': return semitoneInterval = [0, 4, 7, 11, 14];
      case '11': return semitoneInterval = [0, 4, 7, 10, 14, 17];
      case 'm11': return semitoneInterval = [0, 3, 7, 10, 14, 17];
      case 'maj13': return semitoneInterval = [0, 4, 7, 11, 14, 21];
      case '13': return semitoneInterval = [0, 4, 7, 10, 14, 17, 21];
      case 'm13': return semitoneInterval = [0, 3, 7, 10, 14, 17, 21];
      default: return console.log('Not valid chord type');
    }
  }

  makeChord = (selectedNote, chordType) => {
    const semitoneIntervals = this.getSemitoneIntervals(chordType);

    const noteIndex = this.pianoNotes.findIndex(noteObj => noteObj.note === selectedNote);
    const chordNotesIndex = semitoneIntervals.map(interval => noteIndex + interval);
    const chordNotesId = chordNotesIndex.map(index => this.pianoNotes[index].id);

    return chordNotesId;
  }

  render() {
    const pianoStyle = {
      margin: '0 20px',
      width: 'calc(100% - 40px)',
      height: 'auto'
    }

    return (
      <React.Fragment>
        <S.Text style={{ fontSize: '18px' }}>
          {`${this.props.selectedNote}${this.props.selectedChordType} piano chord`}
        </S.Text>
        <SvgLoader style={pianoStyle} path={pianoC24}>
          {/* This resets the piano to its original color.
          Otherwise, the previous selected chords would appear
          along with the new ones, making it unreadable*/}
          <SvgProxy selector="g[fill='none']" fill="none" />
          <SvgProxy selector="g[fill='#001724']" fill="#001724" />

          {this.makeChord(this.props.selectedNote, this.props.selectedChordType).map(note => (
            <SvgProxy key={note} selector={`#${note}`} fill="#3B93BF" />
          ))}
        </SvgLoader>
      </React.Fragment>
    );
  }
}

export default Piano;
