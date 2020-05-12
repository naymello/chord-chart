import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

export class Piano extends Component {
  /* Only notes from the first octave of the piano have a 'note' property.
  That's because they are the only ones that will be used as roots for the chords. */
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
    { id: 'C2' },
    { id: 'C-sharp2' },
    { id: 'D2' },
    { id: 'D-sharp2' },
    { id: 'E2' },
    { id: 'F2' },
    { id: 'F-sharp2' },
    { id: 'G2' },
    { id: 'G-sharp2' },
    { id: 'A2' },
    { id: 'A-sharp2' },
    { id: 'B2' }
  ];

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
