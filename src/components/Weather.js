import React, {useState} from "react";
import Form from "./Form";

const WeatherPanel = () =>{
    let urlW = "https://api.openweathermap.org/data/2.5/weather?appid=49d9dda4741aed1a41f13983d9aa46c8&lang=es";
    let cityurl ="&q=";

    let urlF= "https://api.openweathermap.org/data/2.5/forecast?appid=49d9dda4741aed1a41f13983d9aa46c8&lang=es";

    const [weather, setWeather]= useState([]);
    const [forecast, setForecast]= useState([]);
    const [load, setLoad]= useState(false);
    const [show, setShow]= useState(false);
    const [location, setLocation]= useState("");


    const getLocation= async(loc) =>{
        setLoad(true);
        setLocation(loc);


        urlW= urlW + cityurl + loc;

        await fetch(urlW).then((response)=>{
            if(!response.ok)
            throw {response}
            return response.json();
        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error=>{
            console.log(error);
            setLoad(false);
            setShow(false);
        });
//Forecast
        urlF= urlF +cityurl+loc

        await fetch(urlF).then((response)=>{
            if(!response.ok)
            throw {response}
            return response.json();
        }).then((ForeData)=>{
            console.log(ForeData);
            setForecast(ForeData);
            setLoad(false);
            setShow(true);
        }).catch(error=>{
            console.log(error);
            setLoad(false);
            setShow(false);
        });

    } 

    return(
        <React.Fragment>

            <Form newLocation={getLocation}
            />
        </React.Fragment>
    )
}

export default WeatherPanel;