import React, { PureComponent } from 'react';
import SearchApi from '../api/SearchApi';

import {
  Container,
  Button,
  Input,
} from './indexStyled';

export default class Search extends PureComponent {
  componentDidMount() {
    SearchApi.get({ query: 'rails'})
      .then(res => {
        console.log('res', res)
      })
  }

  render() {
    return (
      <Container>
        search!
        <Button>Search</Button>
        <Input />
      </Container>
    )
  }
}
