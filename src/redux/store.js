import { combineReducers, createStore } from "redux";
import menuReducer from "./menu-reducer";

let reducers = combineReducers({
    menu: menuReducer
});

let store = createStore(reducers);

export default store;