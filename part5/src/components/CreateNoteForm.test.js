import React from 'react';
import CreateNoteForm from './CreateNoteForm';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';

test('test if form eventhandler receive as props have the right details',()=>{
    const createForm = jest.fn();

    const component=render(
        <CreateNoteForm handleCreateNote={createForm}/>
    )
    const title=component.container.querySelector('#title');
    const author =component.container.querySelector('#author');
    const url=component.container.querySelector('#url');
    const submitButton = component.getByText('create');

    fireEvent.change(title,{
        target: {value: 'testTitle'}
    })
    fireEvent.change(author,{
        target: {value: 'testAuthor'}
    })
    fireEvent.change(url,{
        target: {value: 'testUrl'}
    })
    fireEvent.click(submitButton);
    // console.log(createForm.mock.calls[0][0])
    expect(createForm.mock.calls).toHaveLength(1);
    expect(createForm.mock.calls[0][0]).toBe('testTitle')
    expect(createForm.mock.calls[0][1]).toBe('testAuthor')
    expect(createForm.mock.calls[0][2]).toBe('testUrl')
})