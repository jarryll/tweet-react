import React from 'react';
import ReactDOM from 'react-dom';
import { Favourites } from './Favourites.jsx'

export class Users extends React.Component {
    render () {
        let { user } = this.props
        return (
            <div>
                <h3>{user.name} <span> @{user.screen_name}</span></h3>
            </div>

            )
    }
}