import styled, { createGlobalStyle } from 'styled-components';

import arrowDown from './assets/arrow-down.svg'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  height: 10vh;
  background-color: #001724;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const Chords = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  row-gap: 20px;
  margin: 20px;
  justify-items: center;

  input {
    appearance: none;
    outline: none;
  }

  label {
    color: #001724;
    font-weight: bold;
  }
`;

export const Instrument = styled.select`
  margin: 20px;
  padding-left: 10px;
  color: #001724;
  background-color: #FFF;
  font-weight: bold;
  width: 90px;
  height: 2rem;
  border: 2px solid #001724;
  border-radius: 5px;
  outline: none;

  appearance: none;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: top .45rem right 7.5px;

  option{
    font-weight: bold;
  }
`;

export const ShowAll = styled.span`
  font-size: 14px;
  margin: 20px;
  color: #001724;
  font-weight: bold;
`;
