import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from "./Reducer/reducer";
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
