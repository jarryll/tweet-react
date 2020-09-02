import React from 'react';
import ReactDOM from 'react-dom';

export class Favourites extends React.Component {
  render() {
    let { data } = this.props
    return (
        <div>
        <p>Favourite Count: {data}</p>
        </div>
    );
  }
}