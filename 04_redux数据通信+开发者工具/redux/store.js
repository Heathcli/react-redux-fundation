import { createStore,applyMiddleware,combineReducers } from "redux";
import countReducer from './reducers/count'
import personsReducer from "./reducers/person";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// 多个reducer的合并
const allReducers = combineReducers({
    total:countReducer,
    persons:personsReducer
})

export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))