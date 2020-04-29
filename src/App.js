import React, { Component } from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Notes from './components/Notes';
import Chords from './components/Chords';

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
      ],
      selectedNote: 'C',
      selectedChord: 'C'
    }
  }

  handleNoteChange = event => {
    const { value } = event.target;

    this.setState({
      selectedNote: value,
      selectedChord: value
    });
  }

  handleChordChange = event => {
    const { value } = event.target;

    this.setState({
      selectedChord: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <S.GlobalStyle />
        <Navbar />
        <Select />
        <Notes
          notes={this.state.notes}
          handleNoteChange={this.handleNoteChange}
          selectedNote={this.state.selectedNote}
        />
        <Chords
          handleChordChange={this.handleChordChange}
          selectedNote={this.state.selectedNote}
          selectedChord={this.state.selectedChord}
        />
      </React.Fragment>
    );
  }
}

export default App;
