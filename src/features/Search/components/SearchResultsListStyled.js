import styled from 'styled-components';

export const Container = styled.div`
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  transition: 300ms;
  mouse-events: ${({ disabled }) => (disabled ? 'none' : 'inherit')};
`;

