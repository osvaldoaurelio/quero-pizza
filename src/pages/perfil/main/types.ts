import { Dispatch, SetStateAction } from 'react';

import { Order } from '../types';

type Address = string | undefined;

type SetAddress = Dispatch<SetStateAction<string | undefined>>;

type MainProps = {
  name: string;
  useAddressStoraged: [Address, SetAddress];
  lastOrders?: Order[];
};

type StyledProps = {
  isValidAddress?: boolean;
};

export type { MainProps, StyledProps };
