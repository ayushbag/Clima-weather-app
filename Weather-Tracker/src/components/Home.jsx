import { useContext, useEffect, useRef, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import SunAndCloud from '../assets/SunAndCloud.png';
import clouds from '../assets/clouds.png';
import CloudThunder from '../assets/CLoudThunder.png';
import CloudyRainy from '../assets/CloudyRainy.png';
import Rainbow from '../assets/Rainbow.png';
import Frost from '../assets/Frost.png';
import Clear from "../assets/Clear.png"
import ASun from '../assets/ASun.png';
import ThemeContext from '../contexts/Theme';

function Home() {

  const [weatherdata, setWeatherdata] = useState({})
  const [city, setCity] = useState("")
  const inputRef = useRef()

  const {theme, setTheme} = useContext(ThemeContext)

  const searchButtonFunc = () => {
    let inputValue = inputRef.current.value
    setCity(inputValue)
    inputRef.current.value = ""
  }

  const keyDownEnter = (e) => {
    if (e.key === 'Enter') {
      searchButtonFunc()
    }
  }

  const allImages = {
    "Partly cloudy": clouds,
    "Cloudy": clouds,
    "Thunderstrom": CloudThunder,
    "Light rain": CloudyRainy,
    "Rainbow": Rainbow,
    "Frost": Frost,
    "Sunny": SunAndCloud,
    "Overcast": clouds,
    "Haze": clouds,
    "Patchy rain nearby": CloudyRainy,
    "Mist": clouds,
    "Light rain shower": CloudyRainy,
    "Clear ": Clear,
    "Clear": Clear,
    "Fog": clouds,
    "Light drizzle": CloudyRainy,
    "Light rain with thunderstorm": CloudyRainy
  }

  const search = async (city = "Pune") => {
    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`)
      const data = await response.json()
      const weatherDesc = data.current_condition[0].weatherDesc[0].value
      const weatherImage = allImages[weatherDesc] || SunAndCloud;   
      setWeatherdata({
        city: data.nearest_area[0].areaName[0].value,
        temperature: Math.floor(data.current_condition[0].temp_C),
        precipitation: data.current_condition[0].precipMM,
        humdity: data.current_condition[0].humidity,
        windSpeed: data.current_condition[0].windspeedKmph,
        weatherDesc: data.current_condition[0].weatherDesc[0].value,
        uvIndex: data.current_condition[0].uvIndex,
        pressure: data.current_condition[0].pressure,
        image: weatherImage
      })
    } catch (error) {
      console.log(`ERROR WHILE FETCHIING DATA ${error}`);
    }
  }

  useEffect(() => {
    search(city ? city : "Pune")
  }, [city])

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
      <div className='bg-gradient-to-tr from-teal-200 to-orange-300  h-screen flex items-center justify-center p-4 dark:bg-gradient-to-tr dark:from-blue-900 dark:to-orange-900'>
        <div className='h-full w-11/12 md:w-5/12 sm:w-8/12 bg-white items-center justify-between rounded-2xl bg-opacity-65 border-white shadow-md dark:bg-gray-950 dark:bg-opacity-80'>

          {/* TopBAR */}
          <div className='sticky top-0 w-full px-10 py-4'>
            <div className='flex items-center justify-between '>
              <div className='text-xl font-bold text-black dark:text-white pl-3'>
                Clima
              </div>
              <div className='flex items-center gap-x-4 pr-3'>
                <SunIcon
                  onClick={() => setTheme("light")} 
                  className="h-6 w-6 text-white hidden dark:block" />
                <MoonIcon 
                  onClick={() => setTheme("dark")} 
                  className="h-6 w-6 text-black block dark:hidden" />
              </div>
            </div>
            <hr className="h-[1px] my-2 bg-gray-400 bg-opacity-70 border-none"></hr>
          </div>


          <div className='flex flex-col items-center'>
            <div className='flex items-center mt-4'>
              <input
                type="text"
                ref={inputRef}
                onKeyDown={keyDownEnter}
                placeholder='Search your City'
                className='w-[170px] rounded-2xl border text-black dark:text-white text-[14px] border-gray-700 placeholder:text-[12px] placeholder:pr-0 pl-3 dark:bg-gray-800'
              />
              <button
                onClick={searchButtonFunc}
                className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 ml-1 p-[2px] px-2 rounded-full border dark:border-gray-700 dark:hover:bg-gray-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[19px] h-[19px] text-center text-black dark:text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.41-1.41L21 21z" />
                </svg>
              </button>
            </div>

            <div className='flex flex-col justify-center w-full items-center text-center mt-[90px]'>
              <h1 className='absolute top-[140px] text-[85px]  dark:opacity-75 font-semibold bg-gradient-to-b opacity-55 from-gray-950 to-white bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-slate-900 '>{weatherdata && weatherdata.city ? weatherdata.city : "..."}</h1>
              <h1 className='relative text-6xl font-semibold items-center text-gray-950 dark:text-white'>{weatherdata ? weatherdata.temperature : <LoadingDots />}<span className='text-[30px]'>{weatherdata.temperature ? "°c" : ""}</span></h1>
            </div>
            <div className='relative -mt-14'>
              <div className='absolute top-24 left-3 w-32 h-32 bg-purple-200 dark:bg-purple-400 rounded-full mix-blend-multiply   blur-xl animate-blob animation-delay-4000 z-0 dark:mix-blend-hard-light dark:opacity-25'></div>
              <div className='absolute top-24 -right-1 w-32 h-32 bg-green-200 dark:bg-green-400 rounded-full mix-blend-multiply blur-xl animate-blob  animation-delay-2000 z-0  dark:mix-blend-hard-light dark:opacity-25'></div>
              <div className='absolute top-32 -bottom-4 right-14 w-32 h-32 bg-orange-200 dark:bg-orange-300 rounded-full mix-blend-multiply  blur-xl animate-blob z-0 dark:mix-blend-hard-light dark:opacity-25'></div>
              <img className='w-72 h-72 mt-6 z-50 relative contrast-10 dark:brightness-100' src={weatherdata.image} />
            </div>

            <div className='-mt-[42px] mb-6 text-gray-900 dark:text-white text-lg '>
              <h2>{weatherdata.weatherDesc}</h2>
            </div>

            <div className='flex h-full gap-x-16 text-gray-900 dark:text-gray-300'>
              <div className='flex flex-col items-start -ml-2 gap-y-2'>
                <h2>Humidity: {weatherdata && weatherdata.humdity ? weatherdata.humdity : "..."}</h2>
                <h2>Precipitation:  {weatherdata.precipitation ? weatherdata.precipitation : "..."}    </h2>
              </div>
              <div className='flex flex-col items-start gap-y-2'>
                <h2>Wind Speed: {weatherdata.windSpeed ? weatherdata.windSpeed : "..."}</h2>
                <h2>Pressure: {weatherdata.pressure ? weatherdata.pressure : "..."}</h2>
              </div>
            </div>
            <div className='absolute bottom-8 text-[11px] flex text-gray-400 dark:text-gray-500 flex-col items-end'>
              <h1>© 2024 AB. All Rights Reserved.</h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home