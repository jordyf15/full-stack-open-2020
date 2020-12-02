import React from 'react';
import {CoursePart} from '../types';
import Part from './Part';

const Content:React.FC<{courses: CoursePart[]}>=({courses})=>{
    return(
    <div>
        {courses.map(c=><Part key={c.name} course={c}></Part>)}
    </div>
    )
};

export default Content;