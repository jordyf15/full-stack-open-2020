import React from 'react';
import {OccupationalHealthcareEntry} from '../types';
import {Icon} from 'semantic-ui-react';

const OccupationalHealthCare:React.FC<{entry: OccupationalHealthcareEntry}>=({entry})=>{
    return(
        <div className='entries'>
            <h3>{entry.date} <Icon className='stethoscope' size='big'/> {entry.employerName}</h3>
            {entry.description}<br/>
            {entry.sickLeave
            ?<span>{entry.sickLeave.startDate}-{entry.sickLeave.endDate}</span>
            :null}
            
        </div>
    )
};

export default OccupationalHealthCare;