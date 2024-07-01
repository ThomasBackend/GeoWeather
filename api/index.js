const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiHost = process.env.WEATHER_API_HOST;
const ipInfoApiToken = process.env.IPINFO_API_TOKEN;

const app = express();


app.get('/api/hello',async (req,res) =>  {
    try{

    const visitorName = req.query.visitor_name;

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(clientIp)

    if(!visitorName){
        return res.status(404).send('Name is missing');
    }
    const decodedName = decodeURIComponent(visitorName);
    const name = decodedName.replace(/["/]/g, '');

    const ipAddress = await axios.get(`https://ipinfo.io/${clientIp}?token=${ipInfoApiToken}` )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });

    const weather = await axios.get(`https://open-weather13.p.rapidapi.com/city/${ipAddress.city}/${ipAddress.country}`,{
        headers: {
          "x-rapidapi-host": weatherApiHost,
          "x-rapidapi-key": weatherApiKey,
        }
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });

    const tempInCelcius = Math.round((weather.main.temp - 32) * (5/9));
  

    return res.status(200).json({client_ip: ipAddress.ip, location: ipAddress.city, greeting: `Hello, ${name}!, the temperature is ${tempInCelcius} degrees Celcius in ${ipAddress.city}`}) 
}catch(error){
    console.log(error)
    return res.status(500).send(error);
}

})

app.get('/*',(req,res) =>{
    return res.status(200).send(`This route is not in use. Try /api/hello?visitor_name="Joseph" `)
} )

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = 3000;

app.listen(port, ()=>{
    console.log(`Geolocation Server started at ${port}`)
})
