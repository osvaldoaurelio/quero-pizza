import styled from 'styled-components';

import { StyledProps } from './types';

export const StuffedEdgeContainer = styled.div<StyledProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  label {
    flex: 1;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: ${({ withStuffedEdge }) => withStuffedEdge ? 500 : 700};

    span {
      margin-inline-end: 1rem;
      
      &:last-child {
        font-weight: 500;

        svg { font-weight: 500; }
      }
    }
  }
`;

export const PsTextContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-block-start: 1.5rem;
  margin-block-end: 1rem;
`;
