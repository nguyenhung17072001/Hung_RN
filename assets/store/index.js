import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import AuthReducers from "./reducer";
import {rootSaga} from '../sagas/rootSaga'
const RootReducers = combineReducers({
    AuthReducers,
})

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(RootReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
