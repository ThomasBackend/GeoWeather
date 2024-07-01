# GeoWeather

GeoWeather is a Node.js Express application that returns the user's IP address, city, and current temperature. This app uses geolocation and weather APIs to provide real-time information based on the user's IP address.

## Features

- Retrieves user's IP address
- Fetches city name based on IP address
- Provides current temperature for the identified city

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ThomasBackend/GeoWeather.git
    cd GeoWeather
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your API keys:
    ```plaintext
    WEATHER_API_KEY = 'e3e5315b9emsh372462e9be104ddp10c7a2jsn39cc874dd3b7'
    WEATHER_API_HOST = 'open-weather13.p.rapidapi.com'
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

Send a GET request to the endpoint:

GET /api/hello?visitor_name="Mark"

Replace the req query variable "Mark" with your name

The response will be a JSON object containing the user's IP address, city, and current temperature:
```json
{
    "client_ip": "123.456.789.012",
    "location": "New York",
    "greeting": "Hello, Mark!, the temperature is 25 degrees Celcius in New York"
}
```
## Dependencies
- Express
- axios
- dotenv
- body-parser
- nodemon
