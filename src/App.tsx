import React, {useState} from 'react';
import { LocationSearch } from './LocationSearch';
import './App.css';

function App() {
  // const [locationSearch, setLocationSearch] = useState('Paris');
  const [locations, setLocations] = useState<string[]>([]); //an empty array cannot be inferred so specifying generic parameter
  const addLocation = (location: string) => setLocations([location, ...locations])
  // const disableSearch = locationSearch.trim() === '';
  // const addLocation = () => {
  //   setLocations([locationSearch, ...locations]); 
  //   setLocationSearch('');
  // }
  return (
    <div className="container">
      <h1>Weather App</h1>
      
      <LocationSearch onSearch={addLocation}/>

      <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
            <tr>
            <th>Name</th>
            </tr>
            </thead>
            <tbody>
              {locations.map((location, index) => 
                <tr key={index}><td>{location}</td></tr>
              )}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
