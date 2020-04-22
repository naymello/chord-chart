import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

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

export const Notes = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  row-gap: 20px;
  margin: 20px;

  a {
    color: #001724;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
`;

export const Select = styled.select`
  margin: 20px;
  padding: 2.5px;
  color: #001724;
  background-color: #FFF;
  font-weight: bold;
  width: 90px;
  height: 2rem;
  border: 2px solid #001724;
  border-radius: 5px;
  outline: none;
`;
