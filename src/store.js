import {connect} from 'react-redux'
import {createStore} from 'redux'

let slides = [ 'slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

function reduce( state = {slide: slides[0], count: 0}, action ) {
    switch( action.type ) {
        case('next'):
            return next(state);
        case('prev'):
            return prev(state);
        case('tick'):
            return tick(state, action.offset);
        default:
            return state;
    }
}

function next(state) {
    let pos = slides.indexOf( state.slide ) + 1;
    if( slides.length == pos ) return state;
    return ({...state, slide: slides[pos]});
}

function prev(state) {
    let pos = slides.indexOf( state.slide ) - 1;
    if( pos == -1 ) return state;
    return ({ ...state, slide: slides[pos]});
}

function tick(state, offset) {
    return ({ ...state, count: state.count + offset});
}

let store = createStore(reduce);
export default store;