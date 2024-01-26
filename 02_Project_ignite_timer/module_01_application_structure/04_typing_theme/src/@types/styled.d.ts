import 'styled-components';
import { deafultTheme } from '../styles/theme/default';

type ThemeType = typeof deafultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}