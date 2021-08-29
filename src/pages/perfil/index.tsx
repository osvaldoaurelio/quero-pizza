import { Redirect } from 'react-router-dom';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { useLocalStorage } from '~hooks';
import { Order } from './types';
import * as S from './styles';

export function Perfil() {
  const [name] = useLocalStorage<string>('name');
  const [lastOrders] = useLocalStorage<Order[]>('last_orders', []);
  const useAddressStoraged = useLocalStorage<string>('address');

  return (
    name ? (
      <S.PerfilContainer>
        <Header />

        <Main
          name={name}
          lastOrders={lastOrders}
          useAddressStoraged={useAddressStoraged}
        />

        <Footer />
      </S.PerfilContainer>
    ) : (
      <Redirect to="/" />
    )
  );
};
