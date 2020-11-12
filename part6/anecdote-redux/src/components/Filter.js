import React from 'react';
import {connect} from 'react-redux';
import {changeFilter} from '../reducers/filterReducer';

const Filter=(props)=>{
    // const dispatch=useDispatch()
    
    const handleChange=(event)=>{
        const filter=event.target.value;
        props.changeFilter(filter)
    }

    const style={
        marginBottom: 10
    }

    return(
        <div style={style}>
            <input onChange={handleChange}/>
        </div>
    )
}

const mapDispatchtoProps={
    changeFilter
}
const connectedFilter=connect(null,mapDispatchtoProps)(Filter)
export default connectedFilter