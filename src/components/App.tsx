import React, {useState} from 'react';
import { LocationSearch } from './LocationSearch';
import { LocationTable } from './LocationTable';

import './App.css';
import { WeatherLocation } from '../model/Weather';

function App() {
  const [locations, setLocations] = useState<WeatherLocation[]>([]); //an empty array cannot be inferred so specifying generic parameter
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const addLocation = (location: string) => setLocations([location, ...locations])
  return (
    <div className="container">
      <h1>Weather App</h1>  
      <LocationSearch onSearch={addLocation}/>
      {
        error
          ? <div className={`alert alert-danger`}>{error}</div>
          : null
      }
      {
        warning
          ? <div> className={`alert alert-warning`}>{warning}</div>
          : null
      }
      <LocationTable locations={locations}/>
    </div>
  );
}

export default App;
