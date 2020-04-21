import React from 'react';

import logo from '../assets/logo.png'
import { Logo, Nav } from '../styles'

export default function Navbar() {
  return (
    <Nav>
      <Logo src={logo} alt="ChordChart" />
    </Nav>
  );
}