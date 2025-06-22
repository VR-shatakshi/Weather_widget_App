import "./Search.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';


export default function SearchBox({updateInfo}){
    let [city,setcity]= useState("");
    let [error, setError]=useState (false);
   const API_URL= "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "431fcd3e2e2bb5246899dfb2dbea10a2";

   let getWeatherinfo = async()=>{
      try{
      let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
    let result = {
      city :city,
      temp: jsonResponse.main.temp, 
      tempMin :jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   }
   catch (err){
     throw err;
   }
   };

   let handleChange =(event)=>{
      setcity(event.target.value);
   };

   let handleSubmit = async(event)=>{
      try{event.preventDefault();
      console.log(city);
      setcity("");
     let  newinfo =  await getWeatherinfo();
      updateInfo (newinfo)
      } catch (err ){
         setError("No such plac exists ");
      }
   };
     return (
        <div className="searchbox">  

   
           <form onSubmit={handleSubmit}>
            <h2 style={{ fontFamily: 'cursive' }}> Get Your Weather Details on click <LightbulbIcon color="primary" fontSize="large" style={{ color: 'gold', fontSize: 40 }}/></h2>
             <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
             
             <br></br>
             <br></br>
             <br></br>
             <Button variant="contained" type="submit" style={{color:'yellow'}}>Search</Button>
             {error&& <p style={{color:'red'}}>No Such place Exists !</p>}
             <br></br>
             <br></br>
           </form>
            
        </div>
     )  ;  
}