# Clima: Weather Tracking App

Clima is a sleek and responsive weather tracking app built with **React** and **Tailwind CSS**, offering real-time weather updates for users worldwide. The app provides a clean user interface for tracking weather conditions such as temperature, humidity, wind speed, and more.

## Features

- **Real-Time Weather Updates**: Fetches live weather data from the [Wttr.in API](https://wttr.in).
- **Responsive Design**: Optimized for mobile, tablet, and desktop using Tailwind CSS.
- **Location Search**: Search for weather updates by city or country.
- **Current Conditions**: Detailed breakdown of temperature, humidity, wind speed, and more.
- **User-Friendly UI**: Simple, intuitive design for a seamless user experience.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: Integrated with [Wttr.in API](https://wttr.in/{city}?format=j1) for real-time data.


## Installation

1. Clone the repository:
   ```bash
    https://github.com/ayushbag/Clima-weather-app.git
2. Navigate to the project directory:
    ```bash
    cd clima
3. Install dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm run dev
5. The app will be running at http://localhost:5173.

## Usage
Search for any city or location to get the current weather.
View details such as temperature, weather conditions, wind speed, and humidity.
## API Reference
Clima uses the Wttr.in API to fetch weather data. The API returns weather information in JSON format, and a typical request looks like this:

```bash
https://wttr.in/{city}?format=j1
```
Replace {city} with the name of the city for which you want to get the weather details.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Acknowledgments
1. Wttr.in API for providing real-time weather data.
2. React for building the app.
3. Tailwind CSS for styling the user interface.