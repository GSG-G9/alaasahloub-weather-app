import React , {useState, useEffect} from 'react'

import  './style.css';

function GetWeather() {
    const [queryvalue , setSearch] = useState('');
    const [data , setData] = useState({});

    useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${queryvalue}&units=metric&APPID=795a73f80e1447a92a70669a7c739689&unit=metric` , {signal})
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((msg) => console.log(msg))
        return()=>{
            controller.abort();
        }
    }, [queryvalue])
    return (
        <div className="search-container">
            <input type="text" className="search-input" onChange={(e)=>setSearch(e.target.value)} placeholder="Enter your Country to view it's weather"/>
            <div className="weather-search-result">
                {data.name && <h1 className="city-name">{data.name}</h1> }
                {data.name &&  <h2> The tempreture is : {data.main.temp}</h2>}
                {data.name &&  <h3>{data.weather[0].description}</h3>}
                {console.log('dat', data)}
                <ul >
                    <li>{data.name &&  <p>Min temp:  {data.main.temp_min}</p> }</li>
                    <li>{data.name &&  <p>Max temp:  {data.main.temp_max}</p> }</li>
                    <li>{data.name &&  <p>Pressure:  {data.main.pressure}</p>}</li>
                    <li>{data.name && <p> Humidity:  {data.main.humidity}</p>}</li>
                    <li>{data.name  &&  <p>Wind speed:  {data.wind.speed}</p>}</li>
                    <li>{data.name  &&  <p>Wind speed:  {data.wind.deg}</p>}</li>
                </ul>
            </div>
        </div>
    )
}

export default GetWeather
