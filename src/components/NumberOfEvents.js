import { useState } from "react";

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChange = (event) => {
    setNumberOfEvents(event.target.value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="numberofevents"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;