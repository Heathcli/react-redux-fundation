import {ADD_PERSON} from '../contant'

// 暴露一个为Persons组件创建action的方法
export const addPerson = (personObj) => ({type:ADD_PERSON,personObj})