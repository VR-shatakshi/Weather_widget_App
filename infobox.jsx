import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"
export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1595736516846-c9fe0cb86f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3ZlcmNhc3QlMjBjbG91ZHMlMjBXRUFUSEVSfGVufDB8fDB8fHww";
    const HOT_URL ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL= "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    const RAINY_URL= "https://images.unsplash.com/photo-1542308716-0d8306ad1c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJBTklZJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
 

 return(
    
   <div className="Infobox">
        <h1>Weather -<Button style={{color:'purple'}}>{info.weather}</Button></h1>
      <div className="card">
        
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200,width:500}}
        image={info.humidity>80 ?RAINY_URL:info.temp>15 ? HOT_URL:COLD_URL
        } 
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        
        <b>
         Temp = {info.temp}&deg;C 
         <br></br>
         <br></br>
         Max-Temp ={info.tempMax}&deg;C
         <br></br>
         <br></br>
         Min-temp ={info.tempMin}&deg;C
         <br></br>
         <br></br>
         Humidity = {info.humidity}%
         <br></br>
         <br></br>
         Weather = {info.weather}
         <br></br>
         <br></br>
         </b>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    


   
 );
}