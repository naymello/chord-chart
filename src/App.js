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
      selectedNote: 'C'
    }
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      selectedNote: value
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
          handleChange={this.handleChange}
          selectedNote={this.state.selectedNote}
        />
        <Chords selectedNote={this.state.selectedNote} />
      </React.Fragment>
    );
  }
}

export default App;
