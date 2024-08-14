import { useState } from "react";

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false)


  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <ul id="event">
      <li className="event-list-item">
      <h2 onClick={handleClick}>{event.summary}</h2>
      {showDetails && (
        <div className="event-details">
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Start: {new Date(event.start.dateTime).toLocaleString()}</p>
          <p>End: {new Date(event.end.dateTime).toLocaleString()}</p>
        </div>
      )}
    </li>


    </ul>
  );
};

export default Event;