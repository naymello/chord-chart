import React from 'react';

import logo from '../assets/logo.png'
import * as S from '../styles'

export default function Navbar() {
  return (
    <S.Nav>
      <S.Logo src={logo} alt="ChordChart" />
    </S.Nav>
  );
}