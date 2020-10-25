import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Country=({country})=>{
    const [displayedCountry,setDisplayedCountry]=useState(country);
    console.log(displayedCountry);
    useEffect(()=>{axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.name}`)
    .then((res)=>{    
        var countryWithWeather={isObject:true};
        //do not make an variable for state change with reference e.g(object1=objec2), react wont render it
        //so use cloning or something :D
        Object.assign(countryWithWeather,displayedCountry)
        countryWithWeather.temperature=res.data.current.temperature;
        countryWithWeather.location=res.data.location.name;
        countryWithWeather.weatherIcon=res.data.current.weather_icons[0];
        countryWithWeather.wind=`${res.data.current.wind_speed} mph direction ${res.data.current.wind_dir}`;
        setDisplayedCountry(countryWithWeather);
        console.log('weatherget')
        // eslint-disable-next-line
    })},[])
        return (
            <div>
            <h2>{displayedCountry.name}</h2>
            <p>capital {displayedCountry.capital}</p>
            <p>population {displayedCountry.population}</p>
            <h3>languages</h3>
            <ul>
                {displayedCountry.languages.map((language)=>{
                    return <li key={language.name}>{language.name}</li>
                })}
            </ul>
            <img width="300px" height="150px" src={displayedCountry.flag} alt={`${displayedCountry.name} flag`}/>
            <h3>weather in {displayedCountry.location}</h3>
            <p>temperature: {displayedCountry.temperature}</p>
            <img src={displayedCountry.weatherIcon} alt={displayedCountry.weatherIcon}/>
            <p>wind: {displayedCountry.wind}</p>
        </div>
        )
}

export default Country;