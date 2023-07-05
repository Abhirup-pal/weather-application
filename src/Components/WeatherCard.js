import { React} from 'react';
import moment from 'moment';

function WeatherCard(props) {
  
  
  let temp_lim = 35;
  let bgcolor = "primary", humcolor = "warning";
  let weatherData=props.weatherData;
  if (weatherData.main.temp >= temp_lim) {
    bgcolor = "warning";
    humcolor = "primary";
  }
  if(weatherData===[] || weatherData===null || weatherData.cod!==200)
    return (
      <div>
        No data found
      </div>
    )
  else
  return (
    <div className="d-flex justify-content-center flex-column ml-2 ">
      <div className="mx-auto border border-danger" style={{ boxShadow: "5px 5px 5px #dff" }}>
        
        <div>
          <h1 className="display-5 fw-bold text-center bg-success py-4 mb-0 ">{weatherData.name}</h1>
          <div className="d-flex flex-column lead">
            <div className={`d-flex justify-content-between p-4 bg-${humcolor} `}>
              <div className="fw-bold lead mx-5">
                {moment().format('dddd')}, {moment().format('LL')}
              </div>
              <div className="fw-bold lead mx-5 h2">
                {weatherData.weather[0].main}
              </div>
            </div>

            <div className={`d-flex justify-content-between p-4 bg-${bgcolor}`}>
              <div className='mx-5 fw-bold h4'>
                Temperature: {weatherData.main.temp} &deg;C
              </div>
              <div className="mx-5">
                Feels like : {weatherData.main.feels_like} &deg;C
              </div>
            </div>

            <div className={`d-flex justify-content-between p-4 bg-${humcolor} `}>
              <div className='mx-5'>
                Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div className="mx-5">
                Sunset : {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
              </div>
            </div>

            <div className={`d-flex justify-content-between p-4 bg-${bgcolor}`}>
              <div className='mx-5'>
                Humidity : {weatherData.main.humidity} %
              </div>
              <div className="mx-5">
                Pressure : {weatherData.main.pressure} Pa
              </div>
            </div>

            <div className={`d-flex justify-content-between p-4 bg-${humcolor} `}>
              <div className='mx-5'>
                Maximum: {weatherData.main.temp_max} &deg;C
              </div>
              <div className="mx-5">
                Minimum : {weatherData.main.temp_min} &deg;C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard