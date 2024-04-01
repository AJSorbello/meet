import React, { useEffect, useState, useCallback } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

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
    if (Array.isArray(allEvents)) {
      setAllLocations(extractLocations(allEvents));
    } else {
      console.error('allEvents is not an array:', allEvents);
    }
  }, [currentCity, currentNOE]);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are offline. The displayed list may not be up to date.");
    }
   fetchData();
 }, [currentCity, currentNOE, fetchData]);

 return (
    <div className="App">
      <h1>Meet App</h1>
      <p>Choose your nearest city</p>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
}

export default App;