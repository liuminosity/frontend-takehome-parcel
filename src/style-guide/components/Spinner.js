import styled from 'styled-components';

// css mostly taken from https://projects.lukehaas.me/css-loaders/
export default Spinner = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${({ theme }) => theme.colors.primaryComplement};
  border-right: 1.1em solid ${({ theme }) => theme.colors.primaryComplement};
  border-bottom: 1.1em solid ${({ theme }) => theme.colors.primaryComplement};
  border-left: 1.1em solid ${({ theme }) => theme.colors.primary};
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: 300ms;

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
