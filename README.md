# React with Redux
React technology slide show developed with react and redux.   All the slides are react components!

  * React
  * Redux
  * React Router
  * React-swipe
  * ES6
  * Webpack

### [Slideshow](https://ancient-basin-7920.herokuapp.com/#carousel)

#### [Slide 1](https://ancient-basin-7920.herokuapp.com/#slide1) - [Slide 2](https://ancient-basin-7920.herokuapp.com/#slide2) - [Slide 3](https://ancient-basin-7920.herokuapp.com/#slide3) - [Slide 4](https://ancient-basin-7920.herokuapp.com/#slide4) - [Slide 5](https://ancient-basin-7920.herokuapp.com/#slide5) - [Slide 6](https://ancient-basin-7920.herokuapp.com/#slide6)



##Quick Start

```
    npm install
    npm start
```

Goto [http://localhost:3000](http://localhost:3000)

Use left and right arrows to navigate the slideshow. 


##Adding more slides

1) Create a slide eg. `src/slides/slide/slide5.js` :
```
export default class Slide5 extends React.Component {

    render() {
        return(
            <div className='title slide slide5'>
                <h1>Get Ready</h1>
            </div>
        )
    }

}
```

2) Create a new css class called `slide5` in `src/stylesheets/app.scss`

3) Tell `/src/store.js` about your new slide
```
let slides = [ 'slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
```

4) Save -> Hot deploy


## React Router

[http://localhost:3000](http://localhost:3000)

[http://localhost:3000/#/slideshow](http://localhost:3000/#/slideshow)

[http://localhost:3000/#/slide1](http://localhost:3000/#/slide1)

[http://localhost:3000/#/slide2](http://localhost:3000/#/slide2)


## License

Licensed under the [MIT license](https://raw.githubusercontent.com/coder36/react-slides/master/LICENSE).