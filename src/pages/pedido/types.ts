type BagItem = {
  name: string;
  itemTotalPrice: string;
  psText: string;
  itemQuantity: number;
};

type Items = {
  id?: number;
  name: string;
  hasStuffedEdge?: boolean;
  stuffedEdgePrice?: number;
  description: string;
  img: string;
  price: number;
};

export type { BagItem, Items };
