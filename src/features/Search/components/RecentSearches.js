import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  RecentSearchList,
  SearchListItem,
} from './RecentSearchesStyled';

export default class RecentSearches extends PureComponent {
  static propTypes = {
    recentSearchQueries: PropTypes.array.isRequired,
    onListItemClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      recentSearchQueries,
      onListItemClick
    } = this.props;

    return (
      <Container>
        <Title>Recent Searches</Title>
        <RecentSearchList>
          {recentSearchQueries.map(searchQuery => (
            <SearchListItem
              key={searchQuery}
              onClick={() => onListItemClick(searchQuery)}
            >
              {searchQuery}
            </SearchListItem>
          ))}
        </RecentSearchList>
      </Container>
    )
  }
}
