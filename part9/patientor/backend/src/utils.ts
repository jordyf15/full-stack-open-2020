import {newPatient,Gender,HealthCheckEntry,HospitalEntry,HealthCheckRating,Discharge,OccupationalHealthcareEntry} from './types';
import {v4} from 'uuid';
// ,newHospitalEntry,newOccupationalHealthcareEntry,Entry,
const isString=(param: any):param is string=>{
    return (typeof param ==='string' || param instanceof String);
};

const isDate=(param: any): param is string=>{
    return Boolean(Date.parse(param));
};

const isGender=(param: any):param is Gender=>{
    return Object.values(Gender).includes(param);
}

const isHealthRating=(param:any):param is HealthCheckRating=>{
    console.log(param)
    return Object.values(HealthCheckRating).includes(param);
};

const isDischarge=(param:any):param is Discharge=>{
    return Boolean(param.date && param.criteria && isString(param.date) && isString(param.criteria));
}

const parseName=(name: any):string=>{
    if(!name || !isString(name)){
        throw new Error(`Incorrect or missing name ${name}`);
    }
    return name;
}

const parseDate=(date:any):string=>{
    // console.log(`/${date}/`);
    if(!date || !isString(date) /* ada isDate disini */ || !isDate(date)){
        console.log('date error');
        throw new Error(`Incorrect or missing date ${date}`);
    };
    return date;
};

const parseSsn=(ssn:any):string=>{
    if(!ssn || !isString(ssn)){
        throw new Error(`Incorrect or missing ssn ${ssn}`);
    }
    return ssn;
}

const parseGender=(gender: any):Gender=>{
    if(!gender || !isGender(gender)){
        throw new Error(`Incorrect or missing gender ${gender}`);
    }
    return gender;
}

const parseOccupation=(occupation:any):string=>{
    if(!occupation || !isString(occupation)){
        console.log('occupy error');
        
        throw new Error(`Incorrect or missing occupation ${occupation}`);
    };
    return occupation;
}

export const assertNever=(value:never):never=>{
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}
export const toNewPatient=(object:any):newPatient=>{
    const newPatient={
        name: parseName(object.name),
        ssn: parseSsn(object.ssn),
        dateOfBirth: parseDate(object.dateOfBirth),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        entries:[]
    }
    return newPatient;
}

const parseHealthCheck=(param:any):HealthCheckRating=>{
    if(!param&&param!==0 || !isHealthRating(param)){
        console.log('healt error');
        
        throw new Error(`Incorrect or missing HealthCheckRating ${param}`);
    }
    return param;
}

const parseDescription=(param:any):string=>{
    if(!param || !isString(param)){
        console.log('desc error');
        
        throw new Error(`Incorrect or missing description ${param}`);
    }
    return param;
}

const parseSpecialist=(param:any):string=>{
    if(!param || !isString(param)){
        console.log('specialist error');
        
        throw new Error(`Incorrect or missing specialist ${param}`);
    }
    return param;
}

const parseDischarge=(param:any):Discharge=>{
    if(!param || !isDischarge(param)){
        console.log('discharge error');
        
        throw new Error(`Incorrect or missing discharge ${param}`);
    }
    return param;
}

const parseEmployerName=(param:any):string=>{
    
    if(!param || !isString(param)){
        console.log('employername error');
        throw new Error(`Incorrect or missing employer name ${param}`);
    }
    return param;
}


export const toHealthCheck=(object:any):HealthCheckEntry=>{
    const newEntry={
        type: object.type,
        healthCheckRating: parseHealthCheck(object.healthCheckRating),
        date: parseDate(object.date),
        description: parseDescription(object.description),
        specialist: parseSpecialist(object.specialist),
        id: v4(),
        diagnosisCodes:object.diagnosisCodes
    }
    return newEntry;
}

export const toHospital=(object:any):HospitalEntry=>{
    const newEntry={
        id: v4(),
        type: object.type,
        date: parseDate(object.date),
        description: parseDescription(object.description),
        specialist: parseSpecialist(object.specialist),
        discharge: parseDischarge(object.discharge),
        diagnosisCodes:object.diagnosisCodes
    }
    return newEntry
}

export const toOccupational=(object:any):OccupationalHealthcareEntry=>{
    // console.log('validasi occupation baru mau')
    const newEntry={
        id: v4(),
        type: object.type, 
        date: parseDate(object.date),
        description: parseDescription(object.description),
        specialist: parseSpecialist(object.specialist),
        sickLeave: object.sickLeave,
        employerName: parseEmployerName(object.employerName),
        diagnosisCodes:object.diagnosisCodes
    }
    // console.log('udh')
    return newEntry
}