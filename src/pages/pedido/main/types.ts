import { Dispatch, SetStateAction } from 'react';

type StyledProps = {
  withStuffedEdge?: boolean;
};

type MainProps = {
  stuffedEdgeText: string;
  hasStuffedEdgeOptions?: boolean;
  stuffedEdgePrice?: string;
  hasStuffedEdge: boolean;
  setHasStuffedEdge: Dispatch<SetStateAction<boolean>>;
  psText: string;
  setPsText: Dispatch<SetStateAction<string>>
};

export type { StyledProps, MainProps };
