import React, { Component } from 'react';

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
