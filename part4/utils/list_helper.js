const lodash = require('lodash');
const dummy=(blogs)=>{
    return 1
}
const totalLikes=(blogs)=>{
    let likes=0;
    blogs.forEach((blog)=>{
        likes+=blog.likes
    })
    return likes
}
const favoriteBlog=(blogs)=>{
    const mostLikes=Math.max(...(blogs.map((blog)=>blog.likes)))
    const mostLikedBlog= blogs.filter(blog=>blog.likes===mostLikes)[0];
    return{
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes
    }
}
const mostBlogs=(blogs)=>{
    var authorsBlogCount=lodash.countBy(blogs,'author');
    var arrKeyResult=[];
    let key;
    for(key in authorsBlogCount){
       arrKeyResult.push(authorsBlogCount[key])
   };
   const mostBlogCount=Math.max(...arrKeyResult)
   const mostBlogAuthor=lodash.findKey(authorsBlogCount,authorBlogCount=>authorBlogCount===mostBlogCount)
   return {
       author: mostBlogAuthor,
       blogs: mostBlogCount
   }
}

const mostLikes=(blogs)=>{
    const authorBlogs=lodash.groupBy(blogs,'author');
  
    let authorBlog;
    let likes=0;
    let arrTemp=[];
    for(authorBlog in authorBlogs){
        authorBlogs[authorBlog].forEach((blog)=>{
            likes+=blog.likes;
        })
        authorBlogs[authorBlog]=likes;
        arrTemp.push(authorBlogs[authorBlog]=likes)
        likes=0;
    }
  
    const mostLikesCount=Math.max(...arrTemp);
    const mostLikesAuthor=lodash.findKey(authorBlogs,authorBlog=>authorBlog===mostLikesCount)
  
    return {
        author: mostLikesAuthor,
        likes: mostLikesCount
    }
    
}

module.exports={
    dummy,totalLikes,favoriteBlog,mostBlogs,mostLikes
}