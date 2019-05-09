import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import createSagaMiddlewre from 'redux-saga'
import rootSaga from '../saga'

const sagaMiddleware: any = createSagaMiddlewre()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
