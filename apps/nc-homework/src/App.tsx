import React from 'react';
import { Provider } from 'mobx-react';

import stores from './stores';
import Routes from './Routes';

const App = () => (
  <Provider {...stores}>
    <Routes />
  </Provider>
);

export default App;