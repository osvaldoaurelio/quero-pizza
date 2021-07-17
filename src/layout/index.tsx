import { Routes } from '~routes';
import * as S from './styles';

export function Layout() {
  return (
    <S.Container>
      <S.Main>
        <Routes />
      </S.Main>
    </S.Container>
  );
}
