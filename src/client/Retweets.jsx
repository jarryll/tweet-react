import React from 'react';
import ReactDOM from 'react-dom';

export class Retweets extends React.Component {
  render() {
    let { retweets } = this.props
    return (
        <div>
        <p>Retweets: {retweets}</p>
        </div>
    );
  }
}