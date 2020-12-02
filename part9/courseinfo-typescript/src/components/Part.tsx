import React from 'react';
import {CoursePart} from '../types';
import {assertNever} from '../utils';

const Part:React.FC<{course: CoursePart}>=({course})=>{
    switch(course.name){
        case 'Fundamentals':
            return <div>{course.name}&nbsp;&nbsp;&nbsp;&nbsp;{course.exerciseCount}&nbsp;&nbsp;&nbsp;&nbsp;
            {course.description}</div>;
        case 'Using props to pass data':
            return <div>{course.name}&nbsp;&nbsp;&nbsp;&nbsp;{course.exerciseCount}&nbsp;&nbsp;&nbsp;&nbsp;
            {course.groupProjectCount}</div>;
        case 'Deeper type usage':
            return <div>{course.name}&nbsp;&nbsp;&nbsp;&nbsp;{course.exerciseCount}&nbsp;&nbsp;&nbsp;&nbsp;
            {course.description}&nbsp;&nbsp;&nbsp;&nbsp;{course.exerciseSubmissionLink}</div>;
        case 'Fullstack Typescript':
            return <div>{course.name}&nbsp;&nbsp;&nbsp;&nbsp;{course.exerciseCount}&nbsp;&nbsp;&nbsp;&nbsp;
            {course.description}</div>
        default:
            return assertNever(course);
    }
};


export default Part;
