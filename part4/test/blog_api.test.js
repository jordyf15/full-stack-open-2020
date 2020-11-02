const mongoose=require('mongoose');
const supertest=require('supertest');
const app=require('../app');
const Blog=require('../models/blog');
const api = supertest(app);
const helper=require('./test_helper');

beforeEach(async()=>{
    await Blog.deleteMany()
    const blogObjects=helper.initialBlogs.map(blog=>new Blog(blog));
    const promiseArray=blogObjects.map(blog=>blog.save());
    await Promise.all(promiseArray);
})

test('HTTP GET request to the /api/blogs url',async()=>{
    const result = await api.get('/api/blogs')
    expect(result.body).toHaveLength(helper.initialBlogs.length)  
})

test('unique identifier property is id',async()=>{
    const result = await helper.blogsInDB()
    expect(result[0].id).toBeDefined();
})
// test('get user',async()=>{
//     const result=await api.get('/api/users')
//     console.log(result);
//     expect(1).toBe(1);
// })
//4 test kebawah gagal harus login jdi user dlu
test('HTTP POST request to the /api/blogs url',async()=>{
    const login={
        username:'testmen',
        password:'testpass'
    }
    const newBlog={
        title: 'a new blog',
        author: 'tester',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/notExist.html',
        likes: 11
      }
    const loginResult=await api.post('/api/login')
    .send(login)
    .expect(200)
    const token=`bearer ${loginResult.body.token}`;
    
    await api.post('/api/blogs')
                        .send(newBlog)
                        .set('Authorization',token)
                        .expect(201)
                        .expect('Content-Type',/application\/json/)
    const currentDB=await helper.blogsInDB();
  
    expect(currentDB).toHaveLength(helper.initialBlogs.length+1);
    const theBlog=currentDB[currentDB.length-1];
    const result={
        author: theBlog.author,
        likes: theBlog.likes,
        title:theBlog.title,
        url: theBlog.url
    }
    expect(result).toEqual(newBlog)
    
})

test('likes property is missing from request',async()=>{
    const login={
        username:'testmen',
        password:'testpass'
    }
    const loginResult=await api.post('/api/login')
    .send(login)
    .expect(200);
    const token = `bearer ${loginResult.body.token}`

    const newBlog={
        title: 'a blog no one liked',
        author: 'tester',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/notExist.html'
    }
    await api.post('/api/blogs')
    .send(newBlog)
    .set('Authorization',token)
    .expect(201)
    .expect('Content-Type',/application\/json/)
    let expectedResult=newBlog;
    expectedResult.likes=0;

    const currentDB=await helper.blogsInDB()
    const testedBlog=currentDB[currentDB.length-1];
    const result={
        author: testedBlog.author,
        likes: testedBlog.likes,
        title:testedBlog.title,
        url: testedBlog.url
    }
    expect(result).toEqual(expectedResult)
})

test('the title and url properties are missing from the request data',async()=>{
    const login={
        username: 'testmen',
        password: 'testpass'
    }
    const newBlog={
        author: 'tester',
        likes: 1
    }
    const loginResult=await api.post('/api/login')
    .send(login)
    .expect(200);

    const token=`bearer ${loginResult.body.token}`

    await api.post('/api/blogs')
    .send(newBlog)
    .set('Authorization',token)
    .expect(400)

})

test('deletion of a blog',async()=>{
    const login={
        username:'testmen',
        password: 'testpass'
    }
    const loginResult=await api.post('/api/login')
    .send(login)
    .expect(200);
    const token =`bearer ${loginResult.body.token}`;
    const newBlog={
        title: 'a blog that will be deleted',
        author: 'tester',
        url: 'https://deleted.com'
    }
    await api.post('/api/blogs')
    .send(newBlog)
    .set('Authorization',token)
    .expect(201);

    const startingDB=await helper.blogsInDB();
  
    const deletedBlog=startingDB[startingDB.length-1];
   
    await api.delete(`/api/blogs/${deletedBlog.id}`)
    .set('Authorization', token)
    .expect(204);
   
    expect(await helper.blogsInDB()).not.toContain(deletedBlog)
})

test('adding a blog without providing token',async()=>{
    const newBlog={
        title: 'a blog that wont be created successfully',
        author: 'tester',
        url: 'https://fail.com'
    }

    await api.post('/api/blogs')
    .send(newBlog)
    .expect(401);
})

test('updating a blog',async()=>{
    const startingDB=await helper.blogsInDB();
    const updatedBlog=startingDB[startingDB.length-1];

    const expectedBlog={
        id: updatedBlog.id,
        title: updatedBlog.title,
        author: updatedBlog.author,
        url: updatedBlog.url,
        likes: 999
    }
    await api.put(`/api/blogs/${updatedBlog.id}`)
    .send({likes: 999})
    .expect(200);

    const resultDB=await helper.blogsInDB();
    const resultBlog=resultDB[resultDB.length-1];
    expect(resultBlog).toEqual(expectedBlog)
})

afterAll(()=>{
    mongoose.connection.close();
})
