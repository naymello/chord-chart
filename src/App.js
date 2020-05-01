import React, { Component } from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Notes from './components/Notes';
import Chords from './components/Chords';
import Piano from './components/Piano';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedInstrument: 'guitar',
      selectedNote: 'C',
      selectedChord: 'C',
      showAll: false
    }
  }

  handleNoteChange = event => {
    const { value } = event.target;

    this.setState({
      selectedNote: value,
      selectedChord: value,
      showAll: false
    });
  }

  handleChordChange = event => {
    const { value } = event.target;

    this.setState({
      selectedChord: value
    });
  }

  handleInstrumentChange = event => {
    const { value } = event.target;

    this.setState({
      selectedInstrument: value
    });
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    return (
      <React.Fragment>
        <S.GlobalStyle />
        <Navbar />
        <Select handleInstrumentChange={this.handleInstrumentChange} />
        <Notes
          handleNoteChange={this.handleNoteChange}
          selectedNote={this.state.selectedNote}
        />
        <Chords
          handleChordChange={this.handleChordChange}
          toggleShowAll={this.toggleShowAll}
          showAll={this.state.showAll}
          selectedNote={this.state.selectedNote}
          selectedChord={this.state.selectedChord}
        />
        <Piano />
      </React.Fragment>
    );
  }
}

export default App;
