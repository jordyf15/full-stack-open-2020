
export interface CoursePartBase{
    name: string;
    exerciseCount:number;
}

interface descCoursePart extends CoursePartBase{
    description: string;
}

interface CoursePartOne extends descCoursePart{
    name:"Fundamentals";
}

interface CoursePartTwo extends CoursePartBase{
    name: "Using props to pass data";
    groupProjectCount: number;
}

interface CoursePartThree extends descCoursePart{
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }

interface CoursePartFour extends descCoursePart{
    name: 'Fullstack Typescript';

}

export type CoursePart = CoursePartOne| CoursePartTwo| CoursePartThree | CoursePartFour;