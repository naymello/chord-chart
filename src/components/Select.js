import React, { Component } from 'react';

import * as S from '../styles';

class Select extends Component {
  render() {
    return (
      <form>
        <S.Instrument onChange={this.props.handleInstrumentChange}>
          <option value="piano">Piano</option>
          <option value="guitar">Guitar</option>
        </S.Instrument>
      </form>
    );
  }
}

export default Select;
