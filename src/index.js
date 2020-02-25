import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {combineReducers} from 'redux-immutable'
import App from './App';
import {home} from "./pages/Home/store/reducer";

const reducer = combineReducers({
    home
});

let store;

if (
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
} else {
    store = createStore(reducer, applyMiddleware(thunk));
}

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

