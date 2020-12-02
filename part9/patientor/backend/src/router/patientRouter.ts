import express from 'express';
import {getAllPatient,addNewPatient,getOnePatient,addNewEntry} from '../services/patientService';
import {toNewPatient} from '../utils';

const router=express.Router();

router.get('/',(_req,res)=>{
    res.send(getAllPatient());
});

router.post('/',(req,res)=>{
    try{
        const newPatient=toNewPatient({...req.body});
        const addedPatient=addNewPatient(newPatient);
        res.json(addedPatient);
    }catch(err){
        res.status(400).json({error: err.message});
    }
    
});

router.get('/:id',(req,res)=>{
    try{
        const searchPatient=(getOnePatient(req.params.id));
        res.json(searchPatient);
    }catch(err){
        res.status(400).json({error: err.message})
    }
});

router.post('/:id/entries',(req,res)=>{
    try{
        console.log(req.body)
        const alteredPatient=addNewEntry(req.params.id,req.body);
        res.json(alteredPatient);
    }catch(err){
        res.status(400).json({error:err.message});
    }
})

export default router;