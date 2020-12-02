// import patientData from '../data/patients.json';
import patientData from '../data/patientData';
import {noSsnPatient,newPatient,Patient, Entry}  from '../types';
import {v4 as uuidv4} from 'uuid';
import {assertNever,toHealthCheck, toHospital, toOccupational} from '../utils';

export const getAllPatient=():noSsnPatient[]=>{
    return patientData.map(({id,name,dateOfBirth,gender,occupation,entries})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

export const addNewPatient=(addedPatient: newPatient):Patient=>{
    const newPatient={
        id: uuidv4(),
        ...addedPatient
    };
    patientData.push(newPatient);
    return newPatient;
};

export const getOnePatient=(id: string):Patient=>{
    const searchedPatient=patientData.filter(p=>p.id===id)[0];
    if(!searchedPatient){
        throw new Error(`No patient with id ${id}`);
    }
    
    return searchedPatient;
};

export const addNewEntry=(id: string,addedEntry:Entry):Patient=>{
    const searchPatient=patientData.find(p=>p.id===id);
    if(!searchPatient){
        throw new Error(`No patient with id ${id}`);
    }
    // console.log('belum validasi');
    const validEntry=toNewEntry(addedEntry);
    // console.log('sudah validasi');
    searchPatient?.entries.push(validEntry);
    return searchPatient;
}

export const toNewEntry=(addedEntry: Entry):Entry=>{
    switch(addedEntry.type){
        case 'HealthCheck':
            return toHealthCheck(addedEntry);
        case 'Hospital':
            return toHospital(addedEntry);
        case 'OccupationalHealthcare':
            return toOccupational(addedEntry);
        default:
            return assertNever(addedEntry)    
    }

}
