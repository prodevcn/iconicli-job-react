import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from 'reducers'
import eventsMiddleware from 'middleware'

export default function configureStore(data) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(eventsMiddleware)

  return store
}
