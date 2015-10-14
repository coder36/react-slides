import React from 'react'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class Slide extends React.Component {

    render() {
        let slide = React.createFactory(require(`./slides/${this.props.name}`))(this.props);
        return(
            <div className='slideShow'>
                {slide}
            </div>
        );
    }
}