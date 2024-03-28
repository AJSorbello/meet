import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(currentNOE);

  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 0 && value <= 32) {
      setNumberOfEvents(value);
      setCurrentNOE(value);
    } else {
      // Handle invalid input
    }
  };
  return (
    <div className="NumberOfEvents">
   <label htmlFor="number-of-events">Number of Events: </label>
<input
  type="number"
  id="number-of-events"
  className="numberofevents"
  value={numberOfEvents}
  onChange={handleInputChange}
/>
    </div>
  );
};

export default NumberOfEvents;