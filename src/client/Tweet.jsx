import React from 'react'
import { Users } from './Users.jsx'
import { Favourites } from './Favourites.jsx'
import { Retweets } from './Retweets.jsx'
import { Entities } from './Entities.jsx'
const data = require('./tweets.js')
// const user = data.tweets[1]
let tweets = data.tweets

export class Tweet extends React.Component {
    render() {
        return (
            <div>
            {
                tweets.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <Users user = {item.user}/>
                            </div>
                            <div>
                                <p>{item.text}</p>
                            </div>
                            <div>
                                <Entities entities = {item.entities}/>
                            </div>
                            <div>
                                <Favourites data = {item.favorite_count}/>
                                <Retweets retweets = {item.retweet_count}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            )

    }
}