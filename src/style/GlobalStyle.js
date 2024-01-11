import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Colors adapted from https://tailwindcss.com/docs/customizing-colors */
  /* Indigo */
  --color-brand-50: #E0AAFF;
--color-brand-100: #C77DFF;
--color-brand-200: #9D4EDD;
--color-brand-500: #7B2CBF;
--color-brand-600: #5A189A;
--color-brand-700: #3C096C;
--color-brand-800: #240046;
--color-brand-900: #10002B;

  /* Grey */
  --color-grey-0: #F8F9FA;
  --color-grey-50: #E9ECEF;
  --color-grey-100: #DEE2E6;
  --color-grey-200: #CED4DA;
  --color-grey-300: #ADB5BD;
  --color-grey-400: #6C757D;
  --color-grey-500: #495057;
  --color-grey-600: #343A40;
  --color-grey-700: #212529;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 90%;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  width: 100%;
  overflow-x: hidden;

  @media(max-width: 890px) {
  font-size: 53%;
  }

  @media(max-width: 280px) {
  font-size: 45%;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  width: 100%;
  overflow-x: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  height: auto;
}
`

export default GlobalStyle;