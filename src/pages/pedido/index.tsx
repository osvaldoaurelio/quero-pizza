import { useEffect, useState } from 'react';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

import { Header } from './header';
import { Info } from './info';
import { Main } from './main';
import { Footer } from './footer';

import { numberFormat } from '~utils';
import { useLocalStorage } from '~hooks';
import { BagItem, Items } from './types';
import * as S from './styles';

export function Pedido() {
  const { state: item } = useLocation<Items>();

  const history = useHistory<BagItem>();

  const [bagStoraged = [], setBagStoraged] = useLocalStorage<BagItem[]>('bag', []);

  const [stuffedEdgeText, setStuffedEdgeText] = useState<string>('borda recheada');
  const [hasStuffedEdge, setHasStuffedEdge] = useState<boolean>(false);
  const [itemTotalPrice, setItemTotalPrice] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [psText, setPsText] = useState<string>('');

  const handleQuantity = (action: string) => {
    setItemQuantity((prev) => {
      if (action === '-' && prev >= 1) return prev - 1;
      if (action === '+' && prev >= 1) return prev + 1;
      return prev;
    });
  };

  const handleAddItem = () => {
    setBagStoraged(() => {
      setRedirect(true);

      return [...bagStoraged, {
        name: item?.name,
        itemTotalPrice,
        psText: `${psText}
        
        ${hasStuffedEdge ? `Com ${stuffedEdgeText}` : ''}`,
        itemQuantity,
      }];
    });
  };

  useEffect(() => {
    setStuffedEdgeText(() => itemQuantity === 1 ? 'borda recheada' : 'bordas recheadas')
  }, [itemQuantity]);

  useEffect(() => {
    redirect && history.push('/order');
  }, [redirect, history]);

  useEffect(() => {
    const stuffedEdgePrice = (hasStuffedEdge ? item?.stuffedEdgePrice : 0) ?? 0;

    setItemTotalPrice(numberFormat.toMoney(itemQuantity * (item?.price + stuffedEdgePrice)));
  }, [itemQuantity, item?.price, hasStuffedEdge, item?.stuffedEdgePrice]);

  return (
    item ? (
      <S.PedidoContainer>
        <Header img={item.img} description={item.description} />

        <Info 
          name={item.name} 
          description={item.description} 
          price={numberFormat.toMoney(item.price)} 
        />

        <Main
          stuffedEdgeText={stuffedEdgeText}
          hasStuffedEdge={hasStuffedEdge}
          stuffedEdgePrice={numberFormat.toMoney(
            itemQuantity * (item.stuffedEdgePrice ?? 0)
          )}
          hasStuffedEdgeOptions={item.hasStuffedEdge}
          setHasStuffedEdge={setHasStuffedEdge}
          psText={psText}
          setPsText={setPsText}
        />

        <Footer
          handleQuantity={handleQuantity}
          itemQuantity={itemQuantity}
          handleAddItem={handleAddItem}
          itemTotalPrice={itemTotalPrice}
        />
      </S.PedidoContainer>
    ) : (
      <Redirect to="/" />
    )
  );
};
