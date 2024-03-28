// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState, useCallback } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

const fetchData = useCallback(async () => {
  const allEvents = await getEvents();
  const filteredEvents = currentCity === "See all cities" ?
    allEvents :
    allEvents.filter(event => event.location === currentCity)
     if (Array.isArray(filteredEvents)) {
  setEvents(filteredEvents.slice(0, currentNOE));
   } else {
    console.error('filteredEvents is not an array:', filteredEvents);
  }
  setAllLocations(extractLocations(allEvents));
}, [currentCity, currentNOE]);

useEffect(() => {
  fetchData();
}, [fetchData]);

   return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE}/>
      <EventList events={events} />
    </div>
  );
};

export default App;