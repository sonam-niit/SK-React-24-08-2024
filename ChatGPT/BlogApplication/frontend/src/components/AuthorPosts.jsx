// src/components/AuthorPosts.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAuthorPosts, deletePost } from '../services/api';

function AuthorPosts() {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        async function getAuthorPosts() {
            const response = await fetchAuthorPosts(token);
            setPosts(response.data);
            console.log(response);
            
        }
        getAuthorPosts();
    }, [token]);

    const handleDelete = async (postId) => {
        try {
            await deletePost(postId, token);
            setPosts(posts.filter(post => post._id !== postId));
            alert('Post deleted successfully');
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post');
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h2>Your Posts</h2>
                <button className="btn btn-primary" onClick={() => navigate('/create-post')}>
                    Add New Post
                </button>
            </div>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className="card mb-3">
                        <div className="card-body">
                            <h5>{post.title}</h5>
                            <p>{post.content}</p>
                            <small className="text-muted">
                                {formatDate(post.createdAt)}
                            </small>
                            <button 
                                className="btn btn-danger btn-sm mt-2" 
                                onClick={() => handleDelete(post._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts to display.</p>
            )}
        </div>
    );
}

export default AuthorPosts;
