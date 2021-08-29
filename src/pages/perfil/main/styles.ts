import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

import { StyledProps } from './types';

ReactModal.setAppElement('#root');

const rollEyes = keyframes`
  to { transform: rotateY(180deg); }
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 2rem 0;
`;

export const ImageContent = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const InfoContent = styled.div`
  margin: 2rem auto;

  h3 {
    font-size: 6.35vw;
    color: ${({ theme }) => theme.colors.gray_3 };
  }
`;

export const NameContent = styled.div`
  font-size: 1.25rem;

  h4 {
    font-size: 1rem;
    margin-block-end: 0.5rem;
  }
`;

export const AddressContent = styled(NameContent)`
  margin: 2rem 0;
`;

export const WithAddress = styled.div`
  button {
    background-color: transparent;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    padding: 0.25rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-block-start: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

export const WithoutAddress = styled(WithAddress)``;

export const LastOrdersContent = styled(NameContent)``;

export const WithoutLastOrder = styled(WithAddress)`
  span {
    display: inline-block;
    animation: ${rollEyes} .1s 4s backwards, ${rollEyes} .1s 7s forwards;
  }
`;

export const StyledModal = styled(ReactModal)<StyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 90vw;
  height: fit-content;
  padding: 1rem;
  box-shadow: 0 0 32px #0004;
  
  section, footer {
    margin: 1rem auto;
  }

  h2 {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    font-size: 4.5vw;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    padding-block: 1rem;
    margin-inline: -1rem;
    margin-block-start: -1rem;
    text-align: center;

  }

  section {
    position: relative;
    margin-block-end: 0;
    flex: 1;
    width: 100%;

    form {
      margin-block-end: 6.5rem;

      input {
        width: 100%;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
      }
    }

    aside {
      position: fixed;
      top: 8rem;
      right: 1rem;
      width: fit-content;
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.gray_3};

      ul {
        margin-inline-start: 1.2rem;
      }
    }
  }


  footer {
    flex-direction: row;
    gap: 1.5rem;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 1.1rem;
      line-height: 2;
      font-weight: bold;
      border-radius: 24px;
      background-color: transparent;

      &:first-child {
        color: ${({ theme }) => theme.colors.secondary};
        border-color: transparent;
      }

      &:last-child {
        color: ${({ theme, isValidAddress }) => isValidAddress ? theme.colors.primary : theme.colors.gray_2};
        border-color: ${({ theme, isValidAddress }) => isValidAddress ? theme.colors.primary : theme.colors.gray_2};
      }
    }
  }
`;
