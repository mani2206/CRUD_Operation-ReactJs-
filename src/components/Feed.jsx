import React from 'react'
import Post from './Post'
// 2

export default function Feed({post}) {
  return (
    <>
     {
        post.map(post=>(
            <Post key={post.id} post={post}/>
        ))
     }
    </>
  )
}
