import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
