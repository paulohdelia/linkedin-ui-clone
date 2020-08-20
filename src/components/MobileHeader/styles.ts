import styled from "styled-components";
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  background-color: var(--color-link);

  height: 48px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);

`;

export const SearchInput = styled.input`
  margin-left: 16px;
  width: 100%;

  background-color: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background-color: var(--color-white);
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  height: 24px;
  width: 24px;
  color: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: 17px;
`;