// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';

function Posts() {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function getPosts() {
            const response = await fetchPosts(token);
            setPosts(response.data);
        }
        getPosts();
    }, [token]);

    return (
        <div className="container">
            <h2>Posts</h2>
            {posts.map(post => (
                <div key={post._id} className="card mb-2">
                    <div className="card-body">
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
