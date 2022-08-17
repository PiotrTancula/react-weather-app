import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {

  const [weatherData, setWeatherData] = useState('');
  const [pending, setPending] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const handleCityChange = useCallback(city => {
    console.log(`PickCity s city: ${city}`)

    setPending(true);
    setErrorStatus(false);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ece499a0e527edf10cfbac0bf292ab23&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return (res.json())
            .then(data => {

              const weatherApi = {
                city: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].description
              }

              setPending(false);
              setWeatherData(weatherApi);
            })
        } else setErrorStatus(true);

      })
  }, [])

  return (
    <section>
      <PickCity action={handleCityChange} />
      { weatherData  && !errorStatus && <WeatherSummary weatherData={weatherData} />}
      {pending && !errorStatus &&   <Loader />}
      {errorStatus &&  <ErrorBox />}
    </section>
  )
};

export default WeatherBox;