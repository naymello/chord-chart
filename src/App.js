import React from 'react';

import Navbar from './components/Navbar';
import { GlobalStyle } from './styles'

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
    </React.Fragment>
  );
}