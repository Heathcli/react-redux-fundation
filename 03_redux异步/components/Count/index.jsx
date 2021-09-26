import React, { Component } from 'react'
import store from '../../redux/store';
import {createDecrementAction,
        createIncrementAction,
        createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

    state = {}

    increment = () => {
        const { value } = this.incrementState
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const { value } = this.incrementState
        store.dispatch(createDecrementAction(value*1))
    }
    incrementOfOdd = () => {
        const { value } = this.incrementState
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))

        }
    }
    incrementOfDelay = () => {
        const { value } = this.incrementState
        // setTimeout(() => { 
            store.dispatch(createIncrementAsyncAction(value*1,500))

        //  }, 500)
        }

render() {
    return (
        <div>
            <h1>当前求和为{store.getState()}</h1>
            <select ref={(c) => { this.incrementState = c }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+1</button>&nbsp;
            <button onClick={this.decrement}>-1</button>&nbsp;
            <button onClick={this.incrementOfOdd}>奇数加</button>&nbsp;
            <button onClick={this.incrementOfDelay}>异步加</button>&nbsp;

        </div>
    )
}
    }
