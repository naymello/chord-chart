import React from 'react';

import { GlobalStyle } from './styles'
import Navbar from './components/Navbar';
import Notes from './components/Notes';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Notes />
    </React.Fragment>
  );
}