import React from 'react';

const Notification=({message,colorNotif})=>{
    // console.log(colorNotif)
    const greenNotif={
        border: '5px solid green',
        backgroundColor: '#C8C8C8',
        color: 'green',
       padding: '10px 0px 10px 10px',
        fontSize: 22,
        borderRadius: 5,
        marginBottom: 10
    }
    const redNotif={
        border: '5px solid red',
        backgroundColor: '#C8C8C8',
        color: 'red',
        padding: '10px 0px 10px 10px',
        fontSize: 22,
        borderRadius: 5,
        marginBottom: 10
    }
    if(message===null){
        return null
    }else if(colorNotif===true){
        return(
            <div style={greenNotif}>
                {message}
            </div>
        )
    }else{
        return <div style={redNotif}>
            {message};
        </div>
    }
}

export default Notification