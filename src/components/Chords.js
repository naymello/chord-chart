import React, { Component } from 'react';

import * as S from '../styles';

export class Chords extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chordTypes: [
        { id: 1, name: '' },
        { id: 2, name: 'm' },
        { id: 3, name: '7' },
        { id: 4, name: 'm7' },
        { id: 5, name: 'maj7' },
        { id: 6, name: 'mM7' },
        { id: 7, name: '6' },
        { id: 8, name: 'm6' },
        { id: 9, name: '6/9' },
        { id: 10, name: '5' },
        { id: 11, name: '9' },
        { id: 12, name: 'm9' },
        { id: 13, name: 'maj9' },
        { id: 14, name: '11' },
        { id: 15, name: 'm11' },
        { id: 16, name: '13' },
        { id: 17, name: 'm13' },
        { id: 18, name: 'maj13' },
        { id: 19, name: 'add' },
        { id: 20, name: '7-5' },
        { id: 21, name: '7+5' },
        { id: 22, name: 'sus' },
        { id: 23, name: 'dim' },
        { id: 24, name: 'dim7' },
        { id: 25, name: 'm7b5' },
        { id: 26, name: 'aug' },
        { id: 27, name: 'aug7' }
      ],
      showAll: false
    }
  }

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    return (
      <div>
        <S.ShowAll onClick={this.toggleShowAll}>Show all {this.props.selectedNote} chords</S.ShowAll>

        <S.Chords>
          {this.state.chordTypes.map(chordType => {
            const chordName = `${this.props.selectedNote}${chordType.name}`;

            return (
              <div key={chordType.id} style={{ display: this.state.showAll ? 'block' : 'none' }}>
                <input
                  type="radio"
                  id={chordName}
                  name="chord"
                  value={chordName}
                />
                <label htmlFor={chordName}>{chordName}</label>
              </div>
            );
          })}
        </S.Chords>
      </div>
    );
  }
}

export default Chords;
