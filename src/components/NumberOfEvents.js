import { useState, useCallback } from "react";

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

  const debounce = useCallback((func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }, []);

  const saveInput = () => {
    console.log("Saving data");
  };

  const processChange = useCallback(debounce(saveInput, 300), [debounce]);

  return (
    <div className="NumberOfEvents">
      <label htmlFor="numberOfEventsInput">Number of Events: </label>
      <input
        type="number"
        id="number-of-events"
        className="numberofevents"
        value={numberOfEvents}
        onChange={handleInputChange}
        onKeyUp={processChange}
      />
    </div>
  );
};

export default NumberOfEvents;