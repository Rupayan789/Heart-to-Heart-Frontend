import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/rootReducer'
import logger from "redux-logger";
import { persistStore } from "redux-persist";
const middlewares = [thunk, logger];
export const store = createStore(reducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
