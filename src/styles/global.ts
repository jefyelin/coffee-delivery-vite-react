import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.color.base.background};
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }

  button {
    border: none;
    background: none;
  }

  a {
    cursor: pointer;
  }
`
