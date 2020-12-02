import diagnosesData from '../data/diagnoses.json';
import {Diagnose} from '../types';

export const getAllDiagnoses=():Diagnose[]=>{
    return diagnosesData;
};