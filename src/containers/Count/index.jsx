import { connect } from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'
import React, { Component } from 'react'

class Count extends Component {

    state = {}

    increment = () => {
        const { value } = this.incrementState
        this.props.jia(value*1)
    }
    decrement = () => {
        const { value } = this.incrementState
        this.props.jian(value*1)
    }
    incrementOfOdd = () => {
        const { value } = this.incrementState
        if(this.props.reduxState.count % 2 !== 0) {
            this.props.jia(value*1)
        }
    }
    incrementOfDelay = () => {
        const { value } = this.incrementState
        this.props.jiaAsync(value*1,500)
    }

render() {
    console.log(this.props);
    return (
        <div>
            <h1>下方组件人数为{this.props.reduxState.persons.length}</h1>
            <h4>当前求和为{this.props.reduxState.total}</h4>
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
    )}
}

// 接收两个参数 第一个是 返回状态的函数 和 返回操作状态方法的函数
// 第二个是要连接的UI组件
export default connect(
    state => ({reduxState:state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    })
    (Count)