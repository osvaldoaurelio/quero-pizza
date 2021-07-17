import { StyledComponentsProvider } from './theme';
import { Props } from './types';

export function ProviderWrapper({ children }: Props) {
  return (
    <StyledComponentsProvider>
      {children}
    </StyledComponentsProvider>
  );
}
