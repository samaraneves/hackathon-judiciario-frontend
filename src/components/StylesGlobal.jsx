import React from 'react'
import reset  from 'styled-reset'
import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  ${reset}
  :root {
    font-size: 62.5%;
    --white: #fff;
    --colorCentral: #e96c36;
    --medium-light: 300;
    --large-medium: 500;
    --large-bold:700;
    --font-family: 'Mulish', sans-serif;
    --gray-light: #E5E5E5;
    --gray-dark: #494949;
  }
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 1.8rem;
        font-family: var(--font-family);
        font-weight: var(--large-medium);
        outline: none;
    }

  h1,h2,h3,h4,h5 {
    font-weight: var(--large-bold);
  }
`;
export const StylesGlobal = () => <Global/>