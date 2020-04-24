import React from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';

export default function App() {
  return (
    <React.Fragment>
      <S.GlobalStyle />
      <Navbar />
      <Select />
    </React.Fragment>
  );
}