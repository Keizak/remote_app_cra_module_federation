import React from 'react';
import './App.css';
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Remote App module - federation (CRA)
        </p>
          <WeatherWidget/>
      </header>
    </div>
  );
}

export default App;
