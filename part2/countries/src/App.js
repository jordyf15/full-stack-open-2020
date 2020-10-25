import React,{useEffect,useState} from 'react';
import Filter from './components/Filter.js';
import axios from 'axios';
import Countries from './components/Countries.js';


const App=()=>{
const [filter,setFilter]=useState('');
const [dataCountry,setDataCountry]=useState([]);
const [displayCountry,setDisplayCountry]=useState([]);

const inputFilter=(event)=>{
  setFilter(event.target.value);
}

useEffect(()=>{
  axios.get('https://restcountries.eu/rest/v2/all')
  .then((res)=>{
    // console.log('fetch');
    setDataCountry(res.data);
  })
},[])
useEffect(()=>{
  // console.log('filter')
  setDisplayCountry(dataCountry.filter((country)=>{
    return country.name.toLowerCase().includes(filter.toLowerCase());
  }))
  
},[dataCountry,filter]);

return (
  <div>
    <Filter inputFilter={inputFilter} filter={filter}/>
    <Countries displayCountry={displayCountry} setDisplayCountry={setDisplayCountry}/>
  
  </div>
)

}

export default App;
