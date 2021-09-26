import {INCREMENT,DECREMENT} from './contant'

// 创建actionCreater

export const createIncrementAction = (data) => ({type:INCREMENT,data})
export const createDecrementAction = (data) => ({type:DECREMENT,data})
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}
