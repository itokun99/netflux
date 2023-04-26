import { createGlobalStyle } from 'styled-components'
// @ts-ignore
import { FontFamilyEnum } from '@styles/fonts';

const StyledGlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: ${FontFamilyEnum.default};

  &.scroll-off {
    overflow: hidden;
  }
}

a {
  text-decoration: none;
}

`

export default StyledGlobalStyle;