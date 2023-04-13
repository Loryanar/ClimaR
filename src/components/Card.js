import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, showData, weather,  forecast}) =>{

    var today= new Date();
    var day= today.getDate();
    var month= today.getMonth() + 1;
    var year= today.getFullYear();
    var date= day + '/' + month + '/' + year;

    var url="";
    var iconUrl="";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";


if(loadingData){
    return <Spinner/>;
}

if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
    
        
    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
}
    

    return(
        <div className="card1">
            {
                showData === true ? (
                    <div className="containerC">
                        <div className="card"> 
                          
                                <div className="col1">
                                    <h1 className="h3">{weather.name}</h1>
                                    <p className="p">{date}</p>
                                    <img className="img" src={iconUrl} alt="icon"/>
                                    <p className="card-desc">{weather.weather[0].description}</p>
                                    <h2 className="h1">{(weather.main.temp - 273.150).toFixed(1)}<sup>o</sup>C</h2>
                                </div>
                           
                                     <div className="col2">
                                        <div className="card_body">
                                        <p className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</p>
                                        <p className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</p>
                                        <p className="card-text">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</p>
                                        <p className="card-text">Humedad: {weather.main.humidity}%</p>
                                        <p className="card-text">Velocidad del viento: {weather.wind.speed}m/s</p>
                                        </div>
                                    </div> 
                                    
                                    <div className="down">
                                    
                                        <div className="col">
                                            <p className="datee">{forecastDate3}h</p>
                                            <p className="description">{forecast.list[1].weather[0].description}</p>
                                            <img className="imagen"  src={iconUrl3} alt="icon"/>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p className="datee">{forecastDate6}h</p>
                                            <p className="description">{forecast.list[2].weather[0].description}</p>
                                            <img className="imagen" src={iconUrl6} alt="icon"/>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p className="datee">{forecastDate9}h</p>
                                            <p className="description">{forecast.list[3].weather[0].description}</p>
                                            <img className="imagen" src={iconUrl9} alt="icon"/>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>


                                    </div>
                                    
                            </div>
                        
                    </div>
                ):(
                    <h2 className="Xdatos">Sin datos</h2>
                )
            }


        </div>
    );

}

export default Card;