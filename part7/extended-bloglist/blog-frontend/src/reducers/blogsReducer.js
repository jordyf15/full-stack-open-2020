import blogService from '../services/blogs';
const blogsReducer=(state=[],action)=>{
    switch(action.type){
        case 'INIT_BLOGS':
            return action.data;
        case 'ADD_BLOG':
            return state.concat(action.data);
        case 'DELETE_BLOG':
            return state.filter(blog=>blog.id!==action.data);
        case 'LIKE_BLOG':
            return state.map(blog=>{
                if(blog.id===action.data.id){
                    return action.data
                }else{
                    return blog;
                }
            });
        case 'COMMENT_BLOG':
            return state.map(blog=>{
                if(blog.id===action.data.id){
                    return {...blog,comments: blog.comments.concat(action.data.newComment)}
                }else{
                    return blog;
                }
            })
        default:
            return state;
    }
}

export const initBlogs=()=>{
    return async dispatch=>{
        const blogs = await blogService.getAll();
        console.log('init',blogs);
        dispatch({type:"INIT_BLOGS", data: blogs})
    }
}

export const addBlog=(data)=>{
    return async dispatch=>{
        const blog = await blogService.create(data);
        blog.user=data.user
        console.log('add',blog);
        dispatch({type: 'ADD_BLOG', data: blog});
        return blog;
    }
}

export const likeBlog=(id,user)=>{
    return async dispatch=>{
        const blog= await blogService.update(id);
        blog.user=user
        console.log('like',blog);
        dispatch({type: 'LIKE_BLOG', data: blog});
        return blog;
    }
}

export const deleteBlogReducer=(id)=>{
    return async dispatch=>{
        await blogService.deleteBlog(id);

        console.log('delete',id);
        dispatch({type: 'DELETE_BLOG',data: id});
    }
}

export const commentBlog=(id,comment)=>{
    return async dispatch=>{
        console.log(comment)
        const newComment=await blogService.commentBlog(id,comment)
        console.log('comment',newComment);
        dispatch({type: 'COMMENT_BLOG',data:{id, newComment}})
    }
}

export default blogsReducer;