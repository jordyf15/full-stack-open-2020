
//unlike in exercise 9.3 where the calculator target change to first value
//in here the target is still in the last value
interface Result{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}


const calculateRating=(target:number,period:number,sum:number):number=>{
    const totalTarget=target*period;
    if(sum>=totalTarget){
        return 3;
    }else if(sum>=totalTarget/2){
        return 2;
    }else{
        return 1;
    }
};

const describeRating=(rating:number)=>{
    switch(rating){
        case 1:
            return 'very bad, so please do more exercise';
        case 2:
            return 'not too bad but could be better';
        case 3:
            return 'very good, keep it up';
        default:
            return 'default';
    }
};

export const calculateExercises=(exercise: Array<number>,target: number):Result=>{
    if(!exercise || !target){
        throw new Error('parameters missing');
    }
    if(isNaN(target)){
        throw new Error('malformatted parameters');
    }
    exercise.forEach(e=>{
        if(isNaN(e)){
            throw new Error('malformatted parameters');
        }
    });
    const periodLength=exercise.length;
    const trainingDays=exercise.filter(e=>e!==0).length;
    const success=exercise.filter(e=>e>=target).length>=periodLength?true:false;
    let sum =0;
    exercise.forEach(e=>sum+=e);
    const average=sum/periodLength;
    const rating=calculateRating(target,periodLength,sum);
    const ratingDescription=describeRating(rating);
    return{
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};
// let exercises = process.argv.map((a,ind)=>{
//     if(ind>1 && ind<process.argv.length-1){
//         return Number(a);
//     }
//     return NaN;
// });
// exercises=exercises.filter(e=>!isNaN(e));
// try{
// console.log(calculateExercises(exercises,Number(process.argv[process.argv.length-1])));
// }
// catch(err){
//     console.log('An error occured: ',err.message);
// }