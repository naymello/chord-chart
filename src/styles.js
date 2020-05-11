import styled, { createGlobalStyle } from 'styled-components';


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
  margin-bottom: 20px;
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

export const Text = styled.span`
  font-size: 14px;
  margin: 20px;
  color: #001724;
  font-weight: bold;
`;
