import React, { useState, useEffect } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const start = new Date(event.start.dateTime).toLocaleTimeString();
  const end = new Date(event.end.dateTime).toLocaleTimeString();
  const startDate = new Date(event.start.dateTime).toLocaleDateString();

  const processChange = () => {
    // Your scroll event handling code here
  };

  useEffect(() => {
    if (showDetails) {
      window.addEventListener("scroll", processChange);
    }

    return () => {
      window.removeEventListener("scroll", processChange);
    };
  }, [showDetails]);

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Date: {startDate}</p>
      <p>Time: {start} - {end}</p>
      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
       {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>{event.description}</p>
          <br></br>
          <h4>Event status</h4>
        </div>
        ) : null}
    </li>
  );
};

export default Event;