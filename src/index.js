import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';

import CounterModule from "./modules/counter/Counter.module";

const App = () => <CounterModule />;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
