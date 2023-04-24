import 'styled-components';
import { AppColorEnum } from '@styles/colors';


export const theme = {
  dark: {},
  light: {
    body: {
      backgroundColor: AppColorEnum.light,
    },
    text: {
      color: AppColorEnum.dark
    },
  }
}

type ThemeInterface = typeof theme

declare module "styled-components" { 
  interface DefaultTheme extends ThemeInterface {}
}