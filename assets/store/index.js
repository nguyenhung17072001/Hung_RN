import { createStore, combineReducers } from "redux";
import AuthReducers from "./reducer";

const RootReducers = combineReducers({
    AuthReducers
})

export const store = createStore(RootReducers)