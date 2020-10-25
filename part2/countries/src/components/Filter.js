import React from 'react';
const Filter=({inputFilter, filter})=>{
    return(
      <>
      find Countries <input onChange={inputFilter} value={filter}/>
      </>
    )
  }

export default Filter;