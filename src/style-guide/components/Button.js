import styled from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryComplement};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  transition: 100ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Button;
