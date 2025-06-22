import { useState } from "react";
import SearchBox from "./Search.jsx";
import InfoBox from "./infobox.jsx";

export default function WeatherApp(){
   const [weatherInfo, setWeatherInfo]= useState ({
     city : "Nagpur",
    feelsLike: 30.53,
    temp: 28.07,
    tempMax: 28.07,
    tempMin: 28.07,
    humidity: 68,
    weather: "overcast clouds",
   });
   let updateInfo = (newinfo)=>{
    setWeatherInfo(newinfo);
   };
   return(
    <div > 
        <h1 style={{textAlign:"center",backgroundColor:"#1157CF", border:"2rem solid black"}}> Weather-App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info ={weatherInfo}/>
    </div>
   );
};
