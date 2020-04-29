import React, { Component } from 'react';

import * as S from '../styles';

class Select extends Component {
  render() {
    return (
      <form>
        <S.Instrument>
          <option value="guitar">Guitar</option>
          <option value="piano">Piano</option>
        </S.Instrument>
      </form>
    );
  }
}

export default Select;
