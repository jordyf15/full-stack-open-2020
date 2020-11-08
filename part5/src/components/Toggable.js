import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';

const Toggable=forwardRef((props,ref)=>{
    const [visible,setVisible]=useState(false);

    const showWhenVisible={display: visible?'':'none'};
    const hideWhenVisible={display: visible?'none':""};

    useImperativeHandle(ref,()=>{
        return {
            toggleVisibility
        }
    })

    const toggleVisibility=()=>{
        setVisible(!visible)
    }

    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonName}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
})
Toggable.displayName='Toggable';
Toggable.propTypes={
    buttonName: PropTypes.string.isRequired
}

export default Toggable