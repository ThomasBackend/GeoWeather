# GeoWeather

GeoWeather is a Node.js Express application that returns the user's IP address, city, and current temperature. This app uses geolocation and weather APIs to provide real-time information based on the user's IP address.

## Features

- Retrieves user's IP address
- Fetches city name based on IP address
- Provides current temperature for the identified city

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/GeoWeather.git
    cd GeoWeather
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your API keys:
    ```plaintext
    GEOLOCATION_API_KEY=your_geolocation_api_key
    WEATHER_API_KEY=your_weather_api_key
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

Send a GET request to the endpoint:

GET /api/location

The response will be a JSON object containing the user's IP address, city, and current temperature:
```json
{
    "ip": "123.456.789.012",
    "city": "New York",
    "temperature": "22°C"
}
```
## Dependencies
- Express
- axios
- dotenv
- body-parser
- nodemon
