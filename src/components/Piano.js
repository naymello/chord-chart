import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

export class Piano extends Component {
  //Only notes from the first octave of the piano have a 'note' property.
  //That's because they are the only ones that will be used as roots for the chords.
  pianoNotes = [
    { num: 1, id: 'C1', note: 'C' },
    { num: 2, id: 'C-sharp1', note: 'C#' },
    { num: 3, id: 'D1', note: 'D' },
    { num: 4, id: 'D-sharp1', note: 'D#' },
    { num: 5, id: 'E1', note: 'E' },
    { num: 6, id: 'F1', note: 'F' },
    { num: 7, id: 'F-sharp1', note: 'F#' },
    { num: 8, id: 'G1', note: 'G' },
    { num: 9, id: 'G-sharp1', note: 'G#' },
    { num: 10, id: 'A1', note: 'A' },
    { num: 11, id: 'A-sharp1', note: 'A#' },
    { num: 12, id: 'B1', note: 'B' },
    { num: 13, id: 'C2' },
    { num: 14, id: 'C-sharp2' },
    { num: 15, id: 'D2' },
    { num: 16, id: 'D-sharp2' },
    { num: 17, id: 'E2' },
    { num: 18, id: 'F2' },
    { num: 19, id: 'F-sharp2' },
    { num: 20, id: 'G2' },
    { num: 21, id: 'G-sharp2' },
    { num: 22, id: 'A2' },
    { num: 23, id: 'A-sharp2' },
    { num: 24, id: 'B2' }
  ]

  render() {
    const pianoStyle = {
      margin: '0 20px',
      width: 'calc(100% - 40px)',
      height: 'auto'
    }

    return (
      <SvgLoader style={pianoStyle} path={piano}>
      </SvgLoader>
    );
  }
}

export default Piano;
