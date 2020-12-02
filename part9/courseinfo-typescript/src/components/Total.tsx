import React from 'react';
import {CoursePart} from '../types';

const Total:React.FC<{courses:CoursePart[]}>=({courses})=>{
    return(
        <div>
            Number of exercises{" "}
            {courses.reduce((carry,part)=>carry+part.exerciseCount,0)}
        </div>
    )
};

export default Total;