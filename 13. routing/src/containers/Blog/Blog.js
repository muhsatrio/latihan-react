import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const NewPostAsync = asyncComponent(() => {
    return import('../../containers/Blog/NewPost/NewPost');
})

class Blog extends Component {

    state = {
        auth: true
    };

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* Authentication for NewPost */}
                    {this.state.auth ? <Route path="/new-post" component={NewPostAsync} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route render={() => (
                        <h1>Not Found :(</h1>
                    )} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;