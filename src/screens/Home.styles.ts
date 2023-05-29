import styled from '@emotion/styled';


export const Container1 = styled.section`
  width: 300px;
  height: 300px;
  background: blue;
`;

export const Container2 = styled(Container1)`
  background: red;
`;


export const Button = styled.button`
  border-radius: 8px;
  background-color: blue;
  padding: 8px 16px;
  outline: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0d6efd;
  }
`;
