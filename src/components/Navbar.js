import React, { Component } from 'react';

import logo from '../assets/logo.png';
import * as S from '../styles';

export default class Navbar extends Component {
  render() {
    return (
      <S.Nav>
        <S.Logo src={logo} alt="ChordChart" />
      </S.Nav>
    );
  }
}