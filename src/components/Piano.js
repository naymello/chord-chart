import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

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
    { id: 'B2', note: 'B' }
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
