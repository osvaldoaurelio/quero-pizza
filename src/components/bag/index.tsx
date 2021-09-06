import { useEffect, useRef, useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';

import { useLocalStorage } from '~hooks';
import { extratFromBag, size } from '~utils';

import { BagItem } from './types';
import * as S from './styles';

export function Bag() {
  const bagContainerRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  const [bag, setBag] = useLocalStorage<BagItem[]>('bag', []);

  useEffect(() => {
    bagContainerRef.current?.parentElement?.setAttribute('style', 'padding-block-end:2.75rem;')
  }, []);
  
  if (size(bag) <= 0) return null;

  return (
    <S.BagContainer ref={bagContainerRef}>
      <S.BagButton onClick={() => setVisible(true)}>
        <p>
          <FaShoppingBag size={20} />
          <span>{extratFromBag.totalQuantity(bag)}</span>
        </p>
        <p>Ver sacola</p>
        <p>{extratFromBag.totalPrice(bag)}</p>
      </S.BagButton>
      <S.BagStyledModal isOpen={visible} onRequestClose={() => setVisible(false)}>
        <S.Header>
        </S.Header>
        <S.Section>
          <S.Form>
          </S.Form>
          <S.Aside>
          </S.Aside>
        </S.Section>
        <S.Footer>
        </S.Footer>
      </S.BagStyledModal>
    </S.BagContainer>
  );
}
