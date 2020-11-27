import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';

import CounterModule from "./modules/counter/Counter.module";

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () => 
  fetch('/api/v1/counter', { method: 'get' })
    .then(res => res.json());

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <CounterModule />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
