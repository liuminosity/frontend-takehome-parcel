import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h3`

`;

export const RecentSearchList = styled.ul`
  list-style: none;
`;

export const SearchListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100px;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryComplement};
  }
`
