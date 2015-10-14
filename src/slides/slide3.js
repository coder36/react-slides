import React from 'react'
import store from '../store'

export default class Slide3 extends React.Component {

    componentDidMount() {
        this.timer = setInterval( (() => {
            this.tick();
        } ),1000 )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        store.dispatch( {type: 'tick', offset: 1})
    }

    render() {
        return(
            <div className='title slide slide3'>
                <h1>{this.props.count}</h1>
            </div>
        );
    }

}