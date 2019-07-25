import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';

const rootDocument = document.getElementById('root');

render(<Provider store={store}><Router><App/></Router></Provider>, rootDocument);
