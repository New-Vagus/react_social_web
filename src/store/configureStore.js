import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchFetchPost } from '../sagas/saga'
import { rootReducer } from '../reducers/index'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchPost);

