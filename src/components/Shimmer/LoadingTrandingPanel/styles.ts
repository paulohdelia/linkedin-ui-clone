import styled from 'styled-components';

export const Container = styled.div`
  .row:not(:first-child) {
    margin-top: 23px;
  }

  .row {
    display: flex;
    align-items: center;

    .square-skeleton {
      height: 48px;
      width: 48px;
      border-radius: 2px;
      flex-shrink: 0;
    }

    .column {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      width: 100%;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 50%;
        }

        &:nth-child(2) {
          margin-top: 10px;
          width: 100%;
        }
      }
    }
  }
`;
