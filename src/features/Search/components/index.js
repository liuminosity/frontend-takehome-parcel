import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';
import SearchApi from '../api/SearchApi';
import RecentSearches from './RecentSearches';
import SearchResultsList from './SearchResultsList';

import {
  Container,
  Button,
  Input,
  SpinnerContainer,
  Spinner,
} from './indexStyled';

export default class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      searchResults: [],
      recentSearchQueries: [],
    }
  }

  @autobind
  handleRecentQueryClick(searchQuery) {
    this.searchInput.input.value = searchQuery;
    this.search(searchQuery);
  }

  @autobind
  handleSearchClick() {
    const searchQuery = this.searchInput.input.value;
    this.search(searchQuery)
  }

  @autobind
  search(searchQuery) {
    const recentSearchQueries = this.state.recentSearchQueries.slice();
    recentSearchQueries.unshift(searchQuery);
    this.setState({
      isFetching: true,
      recentSearchQueries,
    });

    SearchApi.get({ query: searchQuery })
      .then(res => {
        this.setState({
          isFetching: false,
          searchResults: res
        })
      })
  }

  render() {
    const {
      isFetching,
      searchResults,
      recentSearchQueries,
    } = this.state;

    return (
      <Container>
        search!
        <Button
          onClick={this.handleSearchClick}
          disabled={isFetching}
        >
          Search
        </Button>
        <Input
          ref={r => this.searchInput = r}
        />

        <RecentSearches 
          recentSearchQueries={recentSearchQueries}
          onListItemClick={this.handleRecentQueryClick}
        />
        <SpinnerContainer>
          <Spinner
            visible={isFetching}
          />
        </SpinnerContainer>
        <SearchResultsList
          disabled={isFetching}
          searchResults={searchResults}
        />
      </Container>
    )
  }
}
