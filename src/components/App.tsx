import React, {useState} from 'react';
import { LocationSearch } from './LocationSearch';
import { LocationTable } from './LocationTable';
import { WeatherLocation } from '../model/Weather';
import { searchLocation } from '../services/WeatherService';

import './App.css';


function App() {
  const [locations, setLocations] = useState<WeatherLocation[]>([]); //an empty array cannot be inferred so specifying generic parameter
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  const addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`)
    } else {
      setLocations([location, ...locations]);
    }
  }
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
