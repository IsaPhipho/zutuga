import 'styled-components';
import theme from './theme';
import { LinearGradient } from 'expo-linear-gradient';

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}