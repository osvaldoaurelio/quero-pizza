import styled from 'styled-components';

import { StyledModal } from '~components';

import { BagStyledModalProps } from './types';

export const BagContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

export const BagButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  width: 100vw;
  padding: 0.5rem 1rem;
  flex-direction: row;
  font-weight: bold;
  justify-content: space-between;
  font-size: 1rem;

  p {
    position: relative;

    span {
      position: absolute;
      top: 0.35rem;
      right: 0.35rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const BagStyledModal = styled(StyledModal)<BagStyledModalProps>``;

export const Header = styled.header`
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
`;

export const Section = styled.section`
  margin: 1rem auto 0;
  position: relative;
  flex: 1;
  width: 100%;
`;

export const Form = styled.form`
  margin-block-end: 6.5rem;

  input {
    width: 100%;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  top: 8rem;
  right: 1rem;
  width: fit-content;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray_3};

  ul {
    margin-inline-start: 1.2rem;
  }
`;

export const Footer = styled.footer`
  margin: 1rem auto;
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
  }
`;
