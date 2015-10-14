import React from 'react'
import store from './store'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class Slideshow extends React.Component {

    keyDownHandler(e) {
        if ( e.keyCode == 37) store.dispatch({type: "prev"});
        if ( e.keyCode == 39) store.dispatch({type: "next"});
    }

    componentDidMount() {
        window.addEventListener("keydown", this.keyDownHandler );
    }

    componentWillUnmout() {
        window.removeEventListener( "keydown", this.keyDownHandler )
    }

    render() {
        let slide = React.createFactory(require(`./slides/${this.props.slide}`))(this.props);
        return(
            <div className='slideShow'>
                {slide}
            </div>
        );
    }

}
