import React from 'react';

import { GlobalStyle } from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Select />
    </React.Fragment>
  );
}