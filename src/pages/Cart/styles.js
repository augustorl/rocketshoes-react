import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #5d737e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.03, '#5d737e')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #5d737e;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #5d737e;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #5d737e;
    font-weight: bold;
  }

  strong {
    font-size: 25px;
    margin-left: 10px;
    color: #5d737e;
    font-weight: lighter;
  }
`;
