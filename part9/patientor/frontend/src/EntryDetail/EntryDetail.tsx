import React from 'react';
import {assertNever} from '../utils';
import { Entry} from '../types';
import HealthCheck from './HealthCheck';
import Hospital from './HospitalEntry';
import OccupationalHealthcare from './OccupationalHealthCare';

const EntryDetail:React.FC<{entry:Entry}>=({entry})=>{
    switch(entry.type){
        case 'HealthCheck':
            return <HealthCheck entry={entry}/>;
        case 'Hospital':
            return <Hospital entry={entry}/>;
        case 'OccupationalHealthcare':
            return <OccupationalHealthcare entry={entry}/>;
        default: 
            return assertNever(entry);

    }
}

export default EntryDetail;