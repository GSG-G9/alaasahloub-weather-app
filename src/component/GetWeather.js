import React , {useState, useEffect} from 'react'

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
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Enter your Country to view it's weather"/>
            <div className="weather-search-result">
                {data.name && <h1>{data.name}</h1> }
                {data.name &&  <h3>{data.weather[0].description}</h3>}
                {data.name &&  <h2> {data.main.temp}</h2>}
                {data.name &&  <p>min temp {data.main.temp_min}</p> }
                {data.name &&  <p>max temp {data.main.temp_max}</p> }
                {data.name &&  <p>pressure{data.main.temp_pressure}</p>}
                {data.name && <p> humidity{data.main.temp_humidity}</p>}
                {data.name  &&  <p>wind speed{data.wind.speed}</p>}
                {data.name  &&  <p>wind speed{data.wind.deg}</p>}
            </div>
        </div>
    )
}

export default GetWeather
