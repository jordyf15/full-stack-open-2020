import express from 'express';
import {calculateBmi} from './bmiCalculator';
import {calculateExercises} from './exerciseCalculator';
const app=express();
// app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/hello',(_req,res)=>{
    res.send('Hello Full Stack!');
});

app.get('/bmi',(req,res)=>{
    const height= Number(req.query.height);
    const weight=Number(req.query.weight);
    let result;
    try{
    result=calculateBmi(height,weight);
    }catch(err){// eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment
        res.json({error: err.message});// eslint-disable-line  @typescript-eslint/no-unsafe-member-access 
    }
    console.log(result);
    res.send({height,weight,bmi: result});
});

app.post('/exercises',(req,res)=>{
    const {daily_exercises,target}=req.body;// eslint-disable-line @typescript-eslint/no-unsafe-assignment
    try{
        const result=(calculateExercises(daily_exercises,target));
        res.json(result);
    }catch(err){
        res.json({error:err.message});// eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    }
});

app.listen(3000)
.on('listening',()=>{
    console.log('server running on port 3000');
})
.on('error',(err)=>{
    console.log('an error occured',err.message);
});