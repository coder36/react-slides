import React from 'react'
import store from './store'
import { connect } from 'react-redux';

export default class Slideshow extends React.Component {

    constructor(props) {
        super(props);

        window.addEventListener("keydown", (e) => {
            if ( e.keyCode == 37) store.dispatch({type: "prev"});
            if ( e.keyCode == 39) store.dispatch({type: "next"});
        });
    };

    render() {
        let slide = React.createFactory(require(`./slides/${this.props.slide}`))(this.props);
        return(
            <div className='slideShow'>
                {slide}
            </div>
        );
    }

}

function select(state) {
    return state;
}

export default connect(select)(Slideshow)