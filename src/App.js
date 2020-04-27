import React, { Component } from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Note from './components/Note';

class App extends Component() {
  render() {
    return (
      <React.Fragment>
        <S.GlobalStyle />
        <Navbar />
        <Select />
        <S.Notes>
          <Note note="C" />
          <Note note="C#" />
          <Note note="D" />
          <Note note="D#" />
          <Note note="E" />
          <Note note="F" />
          <Note note="F#" />
          <Note note="G" />
          <Note note="G#" />
          <Note note="A" />
          <Note note="A#" />
          <Note note="B" />
        </S.Notes>
      </React.Fragment>
    );
  }
}

export default App;
