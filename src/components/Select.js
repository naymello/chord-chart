import React, { Component } from 'react';

import * as S from '../styles';

class Select extends Component {
  render() {
    return (
      <form>
        <S.Select>
          <option value="Guitar">Guitar</option>
          <option value="Guitar">Piano</option>
        </S.Select>
      </form>
    );
  }
}

export default Select;
