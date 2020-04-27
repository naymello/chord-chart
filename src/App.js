import React, { Component } from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Note from './components/Note';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { id: 1, name: 'C' },
        { id: 2, name: 'C#' },
        { id: 3, name: 'D' },
        { id: 4, name: 'D#' },
        { id: 5, name: 'E' },
        { id: 6, name: 'F' },
        { id: 7, name: 'F#' },
        { id: 8, name: 'G' },
        { id: 9, name: 'G#' },
        { id: 10, name: 'A' },
        { id: 11, name: 'A#' },
        { id: 12, name: 'B' }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <S.GlobalStyle />
        <Navbar />
        <Select />
        <S.Notes>
          {this.state.notes.map(note => <Note key={note.id} name={note.name} />)}
        </S.Notes>
      </React.Fragment>
    );
  }
}

export default App;
