import { Redirect } from 'react-router-dom';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { useLocalStorage } from '~hooks';
import { Order } from './types';
import * as S from './styles';
import { Bag } from '../../components';

export function Perfil() {
  const [name] = useLocalStorage<string>('name');
  const [lastOrders] = useLocalStorage<Order[]>('last_orders', []);

  if (!name) {
    return <Redirect to="/" />
  }

  return (
    <S.PerfilContainer>
      <Header />
      <Main name={name} lastOrders={lastOrders} />
      <Footer />
      <Bag />
    </S.PerfilContainer>
  );
};
