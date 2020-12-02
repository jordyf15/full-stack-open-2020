import React from 'react';
import {HealthCheckEntry} from '../types';
import {Icon} from 'semantic-ui-react'

const HealthCheck:React.FC<{entry: HealthCheckEntry}>=({entry})=>{
    const setHeartColor=(rating:number)=>{
        switch(rating){
            case 0:
                return 'green';
            case 1:
                return 'yellow';
            case 2:
                return 'red';
            default:
                return 'black';
        }
    }

    return(
        <div className='entries'>
            <h3>{entry.date}<Icon className='doctor' size='big' /></h3>
            {entry.description}<br/>
            <Icon className='heart' color={setHeartColor(entry.healthCheckRating)} />
        </div>
    )
}

export default HealthCheck;