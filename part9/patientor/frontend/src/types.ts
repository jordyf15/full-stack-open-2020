export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}
export enum EntryType{
  HealthCheck='HealthCheck',
  OccupationalHealthcare='OccupationalHealthcare',
  Hospital='Hospital'
}



interface Discharge{
  date: string;
  criteria:string;
}

interface SickLeave{
  startDate: string;
  endDate: string;
}

interface BaseEntry{
  id: string,
  date:string,
  description:string,
  specialist: string,
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating{
  "Health"=0,
  "LowRisk"=1,
  "HighRisk"=2,
  "CriticalRisk"=3
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

export interface Patient {
  entries: Entry[];
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export type NewEntry=Omit<Entry,'id'>;

export type NewOccupational=Omit<OccupationalHealthcareEntry,'id'>

export type NewHealthCheck=Omit<HealthCheckEntry,'id'>;

export type NewHospital=Omit<HospitalEntry,"id">;

