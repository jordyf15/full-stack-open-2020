import React from 'react';
const Filter=({changeHandler, filterValue})=>{
    return(
      <>
      filter shown with <input onChange={changeHandler} value={filterValue}/>
      </>
    )
  }

  export default Filter;