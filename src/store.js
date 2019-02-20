import * as storage from 'redux-storage';
import {rootReducer } from './reducer';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createEngine from 'redux-storage-engine-localstorage';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";

// const reducer = storage.reducer(combineReducers(rootReducer));
const engine = createEngine('my-save-key');

const loggerMiddleware = createLogger();
const initialState = {};

const middleware = [thunkMiddleware];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const load = storage.createLoader(engine);

load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));
export default store;
