import React from 'react';
import Blog from './Blog';
import {render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
let component;
const likeHandler=jest.fn()
beforeEach(()=>{
     const blogData={
        title: 'testTitle',
        author: 'testAuthor',
        url: 'testUrl',
        likes: 0,
        user:'userId'
    }
    component=render(
        <Blog handleLikeBlog={likeHandler}blog={blogData} user={{token: 'testToken',username:'testUsername',name:'testName'}}/>
    )
})

test('blog only render title  by default',()=>{
    // component.debug()
    
   expect(component.container).toHaveTextContent('testTitle')
   expect(component.container).not.toHaveTextContent('testAuthor')//author were displayed of user press 
   //the button view in the last exercise
   expect(component.container).not.toHaveTextContent('testUrl')
   expect(component.container).not.toHaveTextContent('0')
})

test("after view button is clicked blog also show url and number of likes",()=>{
    const button = component.getByText('view')
    fireEvent.click(button);
    expect(component.container).toHaveTextContent('testUrl')
    expect(component.container).toHaveTextContent('0')

})

test('if like button is clicked twice, then eventhandler receive as props is called twice',()=>{
    const viewButton = component.getByText('view')
    fireEvent.click(viewButton);
    // component.debug();

    const likeButton=component.getByText('like');
    fireEvent.click(likeButton);
    fireEvent.click(likeButton)

    expect(likeHandler.mock.calls).toHaveLength(2);
})