import { useState } from "react";
const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {
  const [numberOfEvents, setNumberOfEvents] = useState(currentNOE);

  const handleInputChange = (event) => {
  const value = Number(event.target.value);
  if (value >= 1 && value <= 32) {
    setNumberOfEvents(value);
    setCurrentNOE(value);
  } else {
  }
};

    return (
    <div className="NumberOfEvents">
      <label htmlFor="numberOfEventsInput">Number of Events: </label>
     <input
  type="text"
  id="number-of-events"
  className="numberofevents"
  value={numberOfEvents}
  onChange={handleInputChange}
/>
    </div>
  );
};

export default NumberOfEvents;