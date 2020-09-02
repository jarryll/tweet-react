import React from 'react';
import ReactDOM from 'react-dom';

export class Entities extends React.Component {
  render() {
    let {entities} = this.props
    let image = entities.media
    let appendImage = ()=> {
        if (image !== undefined) {
    return <img src={image[0].media_url}/>
    }
}

    return (
        <div>
        {appendImage()}
        </div>
    );
  }
}