import { createGlobalStyle } from "styled-components";
import "@fontsource/source-sans-pro";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0; 
    border-style: solid; 
    border-color: currentColor; 
    border-color: #E5E7EB;
  }

  html {
    -moz-tab-size: 4;
    tab-size: 4;
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
        font-family: "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
    line-height: 1.5;
    height: 100%; 
  }

  body {
    margin: 0;
    font-family: inherit;
    line-height: inherit;
    min-height: 100%;
    background-color: #141720;
    display: flex;
    flex-direction: column; 
  }

  main{
    color: #F7F7F6;
    min-height: 100vh;
    padding-top: 120px;
  }

  hr {
    height: 0;
    color: inherit;
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family:
      ui-monospace,
      SFMono-Regular,
      Consolas,
      'Liberation Mono',
      Menlo,
      monospace; 
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0; 
    border-color: inherit;
  }

  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  select { 
    text-transform: none;
  }
  
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px; 
  }

  
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  
  summary {
    display: list-item;
  }

  
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  
  hr {
    border-top-width: 1px;
  }


  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  
  :-moz-focusring {
    outline: auto;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:hover {
    text-decoration: underline; 
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }


  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; 
    vertical-align: middle; 
  }

  
  img,
  video {
    max-width: 100%;
    height: auto;
  }



  [hidden] {
    display: none;
  }

  .bg-particles{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: block;
  }
`;

export default GlobalStyle;
