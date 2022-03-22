import 'styled-components';
import { ThemeType } from '../../providers/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
