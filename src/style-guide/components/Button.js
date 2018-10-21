import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryComplement};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 100ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, disabled }) => disabled && css`
    background-color: ${theme.colors.disabled};
    border: solid 1px ${theme.colors.disabled};

    &:hover {
      background-color: ${({ theme }) => theme.colors.disabled};
    }
  `}
`;

export default Button;
