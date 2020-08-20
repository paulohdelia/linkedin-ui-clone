import styled, { css } from "styled-components";
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  display: none;

  background-color: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1128px;
  height: 52px;

  .left, .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-height: 100%;
      min-width: 90px;

      border: 0;
      outline: 0;

      background-color: transparent;
      color: var(--color-icons);

      cursor: pointer;

      &:hover, &.active {
        color: var(--color-white);
      }
      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  background-color: var(--color-input);
  color: var(--color-black);

  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  min-width: 280px;

  &:focus {
    background-color: var(--color-white);
  }
`;

export const ProfileCircle = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

const generalIconCSS = css`
  height: 24px;
  width: 24px;
`;

export const LinkedinIcon = styled(GrLinkedin)`
  height: 34px;
  width: 34px;
  color: var(--color-linkedin);
  background-color: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  height: 16px;
  width: 16px;
`;
