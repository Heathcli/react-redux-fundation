import { createStore,Middleware } from "redux";
import countReducer from './count_reducer'

export default createStore(countReducer)