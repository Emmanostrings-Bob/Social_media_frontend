import {combineReducers} from "redux"
import authReducers from './authReducer'
import postReducer from "./postReducer"

export const reducers = combineReducers({authReducers, postReducer})