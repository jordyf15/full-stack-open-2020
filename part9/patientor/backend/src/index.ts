import express from 'express';
import cors from 'cors';
import diagnoseRouter from './router/diagnoseRouter';
import patientRouter from './router/patientRouter';

const app =express();
app.use(express.json());
app.use(cors());

app.get('/api/ping',(_req,res)=>{
    console.log('someone pinged');
    res.send('pong');
});

app.use('/api/diagnosis',diagnoseRouter);
app.use('/api/patients',patientRouter);

app.listen(3001)
.on('listening',()=>{
    console.log('server has started in port 3001');
})
.on('error',(err)=>{
    console.log('An error occured', err.message);
});
