import React from 'react';

import * as S from '../styles';

export default function Select() {
  return (
    <form>
      <S.Select>
        <option value="Guitar">Guitar</option>
        <option value="Guitar">Piano</option>
      </S.Select>
    </form>
  );
}