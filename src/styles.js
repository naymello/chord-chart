import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
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