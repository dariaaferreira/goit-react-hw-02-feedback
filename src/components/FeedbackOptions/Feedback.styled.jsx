import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  width: 75px;
  padding: 5px;
  text-align: center;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  border: 1px solid #c1c8cf;
  border-radius: 4px;
  background: #e8eef3;
  text-transform: capitalize;
  font-weight: 500;

   &:hover, &:focus {
    background-color: #2196F3;
    border-style: none;
    color: white;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  }
`;