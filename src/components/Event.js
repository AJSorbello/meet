import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const start = new Date(event.start.dateTime).toLocaleTimeString();
  const end = new Date(event.end.dateTime).toLocaleTimeString();
  const startDate = new Date(event.start.dateTime).toLocaleDateString();
  const endDate = new Date(event.end.dateTime).toLocaleDateString();

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>Start Date: {startDate}</p>
      <p>Start Time: {start}</p>
      <p>End Date: {endDate}</p>
      <p>End Time: {end}</p> 
      {showDetails && <p className="details">{event?.description}</p>}
      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
       {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <p>Event status: {event.status}</p>
        </div>
        ) : null}
    </li>
  );
};

export default Event;