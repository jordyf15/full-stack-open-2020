import React from 'react';
import Country from './Country.js'


const Countries=({displayCountry,setDisplayCountry})=>{

    const viewCountry=(event)=>{
        const country =JSON.parse(event.target.value);
        setDisplayCountry([country]);
       
    }
    // console.log(displayCountry);
    if(displayCountry.length>10){
        return <p>Too many matches, specify another filter</p>   
    }else if(displayCountry.length===1){
        return <Country country={displayCountry[0]}/>
    }else{
        return(
            displayCountry.map((country)=>{
                // console.log(country)  
               return( 
               <p key={country.name}>{country.name}
               <button onClick={viewCountry} value={JSON.stringify(country)}>show</button>
               </p>  
               )
            })
        )
    }
   
}

export default Countries;