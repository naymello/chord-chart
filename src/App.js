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
