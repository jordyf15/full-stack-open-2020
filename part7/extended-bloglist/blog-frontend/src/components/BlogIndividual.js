import React,{useState} from 'react';

const BlogIndividual=({blog})=>{
    return(
        <div>
            <h2>{blog.title}</h2>
            <a href={blog.url} target='_blank' rel="noreferrer">{blog.url}</a>

        </div>
    )
}

export default BlogIndividual;