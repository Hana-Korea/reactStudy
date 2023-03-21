import React, { useState } from 'react'
import { data } from '../constants/data'

function Board() {
    const [posts, setPosts] = useState(data)
    const addPost = (post) => {
        setPosts([...posts, post])
    }
    const removePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }
    const updatePost = (newPost, id) => {
        setPosts(posts.map((post) => (post.id === id ? newPost : post)))
    }
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <button
                        onClick={() => {
                            removePost(post.id)
                        }}
                    >
                        제거하기
                    </button>
                    <button
                        onClick={() => {
                            updatePost({ ...post, title: 'a' }, post.id)
                        }}
                    >
                        수정하기
                    </button>
                </div>
            ))}
            <button
                onClick={() => {
                    addPost({ id: 4, title: '야 리액트 재밌다' })
                }}
            >
                1추가하기
            </button>
            <button
                onClick={() => {
                    addPost({ id: 5, title: '야 리액트 너무 재밌다' })
                }}
            >
                2추가하기
            </button>
        </div>
    )
}

export default Board
