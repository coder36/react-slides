import React from 'react';
import Slideshow from './slideshow'
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/app.scss'
import ReactDOM from 'react-dom'

ReactDOM.render( <Provider store={store}><Slideshow/></Provider>, document.getElementById('content'));
