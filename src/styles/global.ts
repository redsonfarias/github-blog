import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.baseBackground};
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.font}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  p, span, input, textarea, button, strong {
    color: ${(props) => props.theme.colors.baseText};
    line-height: 160%;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    outline: transparent;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.baseBorder};
    border-radius: 8px;
  }

`
