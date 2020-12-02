import React from 'react';
import {HospitalEntry} from '../types';
import {Icon} from 'semantic-ui-react';


const Hospital:React.FC<{entry: HospitalEntry}>=({entry})=>{
    return(
        <div className="entries">
            <h3>{entry.date} <Icon className='hospital' size='big'/> </h3>
            {entry.description}<br/>
            {entry.discharge.date} {entry.discharge.criteria}
        </div>
    )
};

export default Hospital;