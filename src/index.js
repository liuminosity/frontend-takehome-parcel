import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Search from './features/Search/components';

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Search />
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
