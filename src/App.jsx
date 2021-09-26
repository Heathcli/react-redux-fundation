import React, { Component } from 'react'
import Persons from './containers/Persons'
import Count from './containers/Count'


export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr />
                <Persons />
            </div>
        )
    }
}
