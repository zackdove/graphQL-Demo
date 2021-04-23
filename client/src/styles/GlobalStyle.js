import { createGlobalStyle } from 'styled-components'
import {colours} from "./Colours"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colours.bgDark};
    color: ${colours.white};
    font-family: 'Montserrat'
  }
  a {
      text-decoration: none;
      color: inherit;
  }
`;
