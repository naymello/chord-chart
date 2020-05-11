import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

export class Piano extends Component {
  pianoNotes = [
    { id: 1, name: 'C1' },
    { id: 2, name: 'C-sharp1' },
    { id: 3, name: 'D1' },
    { id: 4, name: 'D-sharp1' },
    { id: 5, name: 'E1' },
    { id: 6, name: 'F1' },
    { id: 7, name: 'F-sharp1' },
    { id: 8, name: 'G1' },
    { id: 9, name: 'G-sharp1' },
    { id: 10, name: 'A1' },
    { id: 11, name: 'A-sharp1' },
    { id: 12, name: 'B1' },
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
