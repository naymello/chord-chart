import React, { Component } from 'react';

import { SvgLoader, SvgProxy } from 'react-svgmt';
import piano from '../assets/piano.svg';

export class Piano extends Component {
  render() {
    return (
      <SvgLoader width="100%" height="auto" path={piano}>
      </SvgLoader>
    );
  }
}

export default Piano;
