import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import * as S from '../styles';

class Navbar extends Component {
  render() {
    return (
      <S.Nav>
        <S.Logo src={logo} alt="ChordChart" />
      </S.Nav>
    );
  }
}

export default Navbar;
