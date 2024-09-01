import './App.css';
import {Search,MapPin,Wind} from 'react-feather';
import getWeather from './api';
import { useState } from 'react';
import dateFormat from 'dateformat';

function App() {

  const [city,setCity]=useState("");
  const [weather,setWeather]=useState({});


  const getWeatherbyCity=async()=>{
    const weatherData= await getWeather(city);
    setWeather(weatherData);
    setCity("");


  }
 const renderDate=()=>{
  let now=new Date();
  return dateFormat(now,"dddd,mmmm dS, h:mm TT");
 }


  return (
    <div className="app">
     <h1>Weather App</h1>
     <div className="input-wrapper">
      <input type="text" name="" id="" 
      value={city}
      onChange={(e)=>{
        setCity(e.target.value)
      }}
      />

      <button onClick={()=>getWeatherbyCity()}><Search></Search></button>
     </div>

     {weather&&weather.weather&&

     <div className="content">
      <div className="location d-flex">
        <MapPin></MapPin>
        <h2>{weather.name}</h2>
      </div>

      <p className="datetext">{renderDate()}</p>

      <div className="weatherdesc d-flex c-flex">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <h3>{weather.weather[0].description}</h3>
      </div>

      <div className="tempstats d-flex c-flex">
        <h1>{weather.main.temp}<span>&deg;C</span></h1>
      </div>

      <div className="windstats d-flex c-flex">
        <Wind></Wind>
        <h3>Wind is {weather.wind.speed} knots in {weather.wind.deg}&deg;</h3>
      </div>
     

     
     </div>
}
     
     {!weather.weather&&<div className="content">
        <h4>No Data Found!</h4>
      </div>
}
    </div>
  );
}

export default App;
