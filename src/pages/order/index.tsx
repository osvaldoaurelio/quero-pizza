import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { useLocalStorage } from '~hooks';
import { size } from '~utils';

import { BagItem } from './types';
import * as S from './styles';

export function Order() {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false);

  const [bag, setBag] = useLocalStorage<BagItem[]>('bag', []);
  const [addressStoraged, setAddressStoraged] = useLocalStorage<string>('address');

  const clearBag = () => {
    setBag(() => {
      setRedirect(true);

      return [];
    });
  };

  const continueOrder = () => {
    alert('pro zap');
    setRedirect(true);
  }

  useEffect(() => {
    redirect && history.push('/');
  }, [redirect, history]);

  if (size(bag) <= 0) return <Redirect to="/" />;

  return (
    <S.OrderContainer>
      <Header
        clearBag={clearBag}
      />
      <Main
        bag={bag}
        addressStoraged={addressStoraged}
        setAddressStoraged={setAddressStoraged}
       />
      <Footer
        bag={bag}
        addressStoraged={addressStoraged}
        continueOrder={continueOrder}
      />
    </S.OrderContainer>
  );
}
