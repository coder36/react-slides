import React from 'react';
import Slideshow from './slideshow'
import Slide from './slide'
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/app.scss'
import ReactDOM from 'react-dom'
import {Router, Route, Link} from 'react-router';


function Sslide(props) {
    return (
        <Slide name={props.params.slide_name}/>
    )
}

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" component={Slideshow}/>
                <Route path="/slideshow" component={Slideshow}/>
                <Route path="/:slide_name" component={Sslide}/>
            </Router>
        </Provider>
    )
}

ReactDOM.render(
    <Root/>, document.getElementById('content')
);
