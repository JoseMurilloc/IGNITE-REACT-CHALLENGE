import 'styled-components';
import {type theme} from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme extends ThemeType {}
}
