import React from 'react'
import {loadJson, find_nested_prop} from '../utils'
import store from '../store'


export default class Slide6 extends React.Component {

    componentDidMount() {
        loadJson('https://www.reddit.com/.json', (json) => {
            find_nested_prop(json, 'href', (href, parent) => {
                loadJson(href, nestedJson => store.dispatch({type: "save", key: href, data: nestedJson}));
            });
            store.dispatch({type: "save", key: 'reddit', data: json});
        });
    }

    render() {
        const reddit = this.props.reddit;
        let headline = reddit ? reddit.data.children[0].data.title : '...';

        return (
            <div className="title slide slide6">
                <h1>{headline}</h1>
            </div>
        )
    }
}