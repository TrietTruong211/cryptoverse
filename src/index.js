import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; //To use Link
import { Provider } from 'react-redux';


import App from './App';
import store from './app/store'
import 'antd/dist/antd.css';

ReactDOM.render(
    //Wrap app around router to use Link
    <Router>
        {/* using store = state of the whole app, using provider to give access to every app component */}
        {/* Courtesy of react-redux */}
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);