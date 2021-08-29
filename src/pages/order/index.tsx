import { Redirect } from 'react-router-dom';

import { useLocalStorage } from '~hooks';
import { BagItem } from '../pedido/types';

export function Order() {
  const [bagStoraged, setBagStoraged] = useLocalStorage<BagItem[]>('bag', []);

  if (!bagStoraged?.length) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h3 onClick={() => setBagStoraged([])}>limpar order</h3>
      <br />
      <h1>bag: {JSON.stringify(bagStoraged)}</h1>
    </>
  );
};
