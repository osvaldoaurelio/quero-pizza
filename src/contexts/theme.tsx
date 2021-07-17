import { ThemeProvider } from 'styled-components';

import { Props } from './types';
import { theme } from '~styles/themes';


export function StyledComponentsProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
