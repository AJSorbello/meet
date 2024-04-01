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
   if (!navigator.onLine) {
     setWarningAlert("You are currently offline. Some features may not work.");
   } else {
     setWarningAlert(""); 
     // set the warning alert message to a non-empty string
   }
   fetchData();
 }, [currentCity, currentNOE, fetchData]);

 return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} setWarningAlert={setWarningAlert}/>
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} setWarningAlert={setWarningAlert}/>
      <EventList events={events} />
    </div>
  );
}

export default App;