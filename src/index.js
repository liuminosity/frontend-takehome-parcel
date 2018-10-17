import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Search from './features/Search';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
