import React from 'react'
import ReactSwipe from 'react-swipe'


export default class Carousel extends React.Component {

    keyDownHandler(e) {
        if ( e.keyCode == 37) this.refs.ReactSwipe.swipe.prev();
        if ( e.keyCode == 39) this.refs.ReactSwipe.swipe.next();
    }

    componentDidMount() {
        window.addEventListener("keydown", this.keyDownHandler.bind(this) );
    }

    componentWillUnmout() {
        window.removeEventListener( "keydown", this.keyDownHandler )
    }

    render() {

        let slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'].map( (slide) => {
            let Slide = React.createFactory( require(`./slides/${slide}`))(this.props);

            return (
                <div className='slideShow'>
                    {Slide}
                </div>
            )
        });

        return (
            <ReactSwipe ref="ReactSwipe" continuous={false}>
                {slides}
            </ReactSwipe>
        );
    }
}