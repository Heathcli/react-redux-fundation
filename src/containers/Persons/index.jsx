import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPerson} from '../../redux/actions/person'
import {nanoid} from 'nanoid'

class Persons extends Component {

    addPerson = () => {
        
        this.props.addPerson({id:nanoid(),name:this.name.value,age:this.age.value})
        this.name.value = ''
        this.age.value = ''

    }


    render() {
        return (
            <div>
                <h1>上方组件总和为{this.props.reduxState.total}</h1>
                <h4>Persons组件</h4>
                <input ref={c => {this.name = c}} type="text" placeholder='请输入姓名'/>
                <input ref={c => {this.age = c}} type="text" placeholder='请输入年龄'/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.reduxState.persons.map((p) => {
                            return <li key={p.id}>姓名：{p.name}--年龄：{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({reduxState:state}),
    {
        addPerson:addPerson
    }
)(Persons)

