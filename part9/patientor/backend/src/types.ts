export interface Diagnose{
    code: string,
    name: string,
    latin?: string
}

export enum Gender{
    Male='male',
    Female='female',
    Other='other'
}

export interface Discharge{
    date: string;
    criteria:string;
}

interface SickLeave{
    startDate: string;
    endDate: string;
}

export interface HealthCheckEntry extends BaseEntry{
    type: 'HealthCheck';
    healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry{
    type: 'OccupationalHealthcare';
    employerName:string;
    sickLeave?: SickLeave;
}

export interface HospitalEntry extends BaseEntry{
    type: 'Hospital';
    discharge: Discharge
}

export type Entry= HospitalEntry |HealthCheckEntry|OccupationalHealthcareEntry;
export interface Patient{
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string,
    entries: Entry[]
}

interface BaseEntry{
    id: string,
    date:string,
    description:string,
    specialist: string,
    diagnosisCodes?: Array<Diagnose['code']>;
}

export enum HealthCheckRating{
    "Health"=0,
    "LowRisk"=1,
    "HighRisk"=2,
    "CriticalRisk"=3
}



export type noSsnPatient = Omit<Patient,'ssn'>;

export type newPatient=Omit<Patient,'id'>;

export type PublicPatient=Omit<Patient,'ssn'|'entries'>;
