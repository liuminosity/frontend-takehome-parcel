import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  ItemContainer
} from './SearchResultItemStyled'

export default class SearchResultItem extends PureComponent {
  render() {
    const {
      itemDetails
    } = this.props;

    return (
      <ItemContainer>
        <div>Name: {itemDetails.name}</div>
        <div>Downloads: {itemDetails.downloads}</div>
      </ItemContainer>
    )
  }
}
