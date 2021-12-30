import { createGlobalStyle } from 'styled-components'
import theme from '../theme'
import 'normalize.css'
// import hexa from '../utils/hexa'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${theme.color.background};
  font-family: ${theme.font.fontFamily.body};
  font-size: ${theme.font.fontSize.textNormal};
  color: ${theme.color.primary};
  visibility: hidden;
  overflow-x: hidden;

}

h1 {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${theme.font.fontFamily.heading};
  font-weight: normal;
}

p {
}

a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
}

ul {
  list-style-type: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}

img {
  vertical-align: middle;
}
`

export default GlobalStyle
