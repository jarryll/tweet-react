import React from 'react';
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader';
import { Tweet } from './Tweet.jsx';

class App extends React.Component {
  render() {
    return (
      <Tweet/>
    );
  }
}

export default hot(module)(App);