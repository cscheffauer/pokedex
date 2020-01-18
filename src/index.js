import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'          //importing the provider from the react-redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';      //to use tachyons lib
import { changeRoute, searchPeople, requestPeople } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({ changeRoute, searchPeople, requestPeople });       //combine the reducers from the reducers file into one root reducer
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
//to create the store with the root reducer and apply the thunkMiddleware and the logger to the store


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
//render the provider with the app to the html tag with root as id (is in public/index.html)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
