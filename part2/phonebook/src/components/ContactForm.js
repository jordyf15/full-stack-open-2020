import React from 'react';
const ContactForm=({submitHandler, changeInputName,changeInputNumber,name,number })=>{
    return(
      <form onSubmit={submitHandler}>
          <div>
            name: <input onChange={changeInputName} value={name}></input>
            number: <input onChange={changeInputNumber} value={number}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }
  
  export default ContactForm;