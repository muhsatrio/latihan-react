import React, { Component } from 'react'

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import {Link} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import {Route} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        // First Way
        // this.setState({selectedPostId: id});
        
        // Second Way
        this.props.history.push(`/posts/${id}`);
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Satrio'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // First Way
                // <Link to={`/${post.id}`} key={post.id}>

                // Second Way: Hide <Link> (Using Navegate Programmatically)
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        // {...this.props}
                        clicked={() => this.postSelectedHandler(post.id)} />
                
                // First Way
                // </Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts; 
