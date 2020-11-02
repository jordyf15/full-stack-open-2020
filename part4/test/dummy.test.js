const { mostLikes } = require('../utils/list_helper');
const listHelper=require('../utils/list_helper');

test('dummy returns one',()=>{
    const blogs=[];
    expect(listHelper.dummy(blogs)).toBe(1)
})
describe('totalLikes',()=>{
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]

    test('when list only has one blog, equal the likes of that',()=>{
        const result=(listHelper.totalLikes(listWithOneBlog));
        expect(result).toBe(5);
    })
})

describe('favoriteBlog',()=>{
  const listOfBlogs=[
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }, {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Hifumi is best new game girl',
      author: 'the creator of this project',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 15,
      __v: 0
    }, {
      _id: '5a422aa71b54a676234d17f8',
      title: 'random book you dont need',
      author: 'some random dude',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
  ]
  test('find the most favorite blog',()=>{
    const expectedResult={
      title: 'Hifumi is best new game girl',
      author: 'the creator of this project',
      likes: 15
    }
    const result=listHelper.favoriteBlog(listOfBlogs);
    expect(result).toEqual(expectedResult)
  })
})

const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 },
 { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 },
  { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, 
  { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, 
  { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, 
  { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }
]

describe('mostBlogs',()=>{
  test('author that have the most blogs',()=>{
    const result=listHelper.mostBlogs(blogs);
    const expectedResult={
      author: "Robert C. Martin",
      blogs: 3
    }
    expect(result).toEqual(expectedResult);
  })
})

describe('mostLikes',()=>{
  
  test('author that have most likes',()=>{
    const result=listHelper.mostLikes(blogs);
    const expectedResult={
      author: "Edsger W. Dijkstra",
      likes: 17
    }
    expect(result).toEqual(expectedResult);
  })
})