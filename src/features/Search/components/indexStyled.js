import styled from 'styled-components';
import StyleGuide from 'style-guide';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
`;

export const Button = StyleGuide.Button;

export const Input = StyleGuide.Input;

export const SpinnerContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Spinner = styled(StyleGuide.Spinner)`
  position: absolute;
  left: calc(50% - 5em);

`;
