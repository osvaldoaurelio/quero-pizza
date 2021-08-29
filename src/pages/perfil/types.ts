type Item = {
  id?: number;
  name: string;
  description: string;
  thumb: string;
  img: string;
  price: number;
};

enum Payment {
  CREDIT = 'cartão de crédito',
  DEBIT = 'cartão de débito',
  CASH = 'em dinheiro',
  PIX = 'via pix',
};

type Order = {
  payment: Payment;
  items: Item[];
};

export type { Order };
