import { Dispatch, SetStateAction } from 'react';

import { BagItem } from '~types';

type MainProps = {
  bag?: BagItem[];
  addressStoraged?: string;
  setAddressStoraged: Dispatch<SetStateAction<string | undefined>>;
}

export type { MainProps };
