import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';

import {
  Container,
} from './SearchResultsListStyled';

export default class SearchResultsLists extends PureComponent {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
  }

  render() {
    const {
      searchResults,
      disabled,
    } = this.props;

    return (
      <Container disabled={disabled}>
        {searchResults.length > 0 && (
          searchResults.map(result => (
            <SearchResultItem
              itemDetails={result}
            />
          ))
        )}
      </Container>
    )
  }
}
