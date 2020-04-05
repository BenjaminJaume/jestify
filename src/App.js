import React from 'react';
import logo from './logo.svg';
import './App.css';

import Paragraph from './Paragraph'
import List from './List'
// import Toggle from './ToggleClass'
import ToggleHooks from './ToggleHooks'
import User from './User'

var items = [
  { id: 1, body: 'Shopping' },
  { id: 2, body: 'Exercise' },
  { id: 3, body: 'Cook' }
];

var user = { name: "Joni Baez", age: "32", address: "123, Charming Avenue" }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List items={items} />

        {/* <Toggle /> */}

        {/* <ToggleHooks /> */}

        <User id={'123'} />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Paragraph>
          This is the text displayed
        </Paragraph>

      </header>
    </div>
  );
}

export default App;
