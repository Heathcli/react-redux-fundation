import {nanoid} from 'nanoid'

import {ADD_PERSON} from '../contant'

// 列表初始有一个人
const initPersons = [{id:nanoid(),name:'tom',age:18}]

export default function personsReducer(preState = initPersons,action) {
    const {type,personObj} = action
    switch (type) {
        case ADD_PERSON:
            return [personObj,...preState]
          
        default:
            return preState
    }
}