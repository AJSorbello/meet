import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false);
  // Convert the event start time to the viewer's local time
const startTime = new Date(event.start.dateTime).toLocaleTimeString();
const endTime = new Date(event.end.dateTime).toLocaleTimeString();
  return (
    <li className="event">
      <h3>{event?.summary}</h3>
      <p>{event?.location}</p>
      <p>Time: {startTime} - {endTime}</p>
       {showDetails ?
        <div className="details-container">
          <p className="details">{event.description}</p>
        </div> :
        null
      }
        <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>
    </li>
  )
}
  
export default Event;