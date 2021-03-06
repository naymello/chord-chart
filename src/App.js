import React, { Component } from 'react';

import * as S from './styles';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Chords from './components/Chords';
import Piano from './components/Piano';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNote: 'C',
      selectedChordType: '',
      showAll: false
    }
  }

  handleNoteChange = event => {
    const { value } = event.target;

    this.setState({
      selectedNote: value,
      selectedChordType: '',
      showAll: false
    });
  }

  handleChordChange = event => {
    const { value } = event.target;

    this.setState({
      selectedChordType: value,
      showAll: false
    });
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    const { showAll, selectedNote, selectedChordType } = this.state;

    return (
      <React.Fragment>
        <S.GlobalStyle />
        <Navbar />
        <S.Wrapper>
          <Notes
            handleNoteChange={this.handleNoteChange}
            selectedNote={selectedNote}
          />
          <Chords
            handleChordChange={this.handleChordChange}
            toggleShowAll={this.toggleShowAll}
            showAll={showAll}
            selectedNote={selectedNote}
            selectedChordType={selectedChordType}
          />
          <Piano
            selectedNote={selectedNote}
            selectedChordType={selectedChordType}
          />
        </S.Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
