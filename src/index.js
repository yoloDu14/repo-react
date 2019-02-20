import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {rootReducer} from "./reducer";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import store from "./store";
//
// const loggerMiddleware = createLogger();
// const initialState = {};
//
// const middleware = [thunkMiddleware];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware, loggerMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
