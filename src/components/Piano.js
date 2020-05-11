import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

export class Piano extends Component {
  //Only notes from the first octave of the piano have a 'note' property.
  //That's because they are the only ones that will be used as roots for the chords.
  pianoNotes = [
    { id: 1, name: 'C1', note: 'C' },
    { id: 2, name: 'C-sharp1', note: 'C#' },
    { id: 3, name: 'D1', note: 'D' },
    { id: 4, name: 'D-sharp1', note: 'D#' },
    { id: 5, name: 'E1', note: 'E' },
    { id: 6, name: 'F1', note: 'F' },
    { id: 7, name: 'F-sharp1', note: 'F#' },
    { id: 8, name: 'G1', note: 'G' },
    { id: 9, name: 'G-sharp1', note: 'G#' },
    { id: 10, name: 'A1', note: 'A' },
    { id: 11, name: 'A-sharp1', note: 'A#' },
    { id: 12, name: 'B1', note: 'B' },
    { id: 13, name: 'C2' },
    { id: 14, name: 'C-sharp2' },
    { id: 15, name: 'D2' },
    { id: 16, name: 'D-sharp2' },
    { id: 17, name: 'E2' },
    { id: 18, name: 'F2' },
    { id: 19, name: 'F-sharp2' },
    { id: 20, name: 'G2' },
    { id: 21, name: 'G-sharp2' },
    { id: 22, name: 'A2' },
    { id: 23, name: 'A-sharp2' },
    { id: 24, name: 'B2' }
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
