import React, { Component } from 'react';

import * as S from '../styles';

export default class Select extends Component {
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