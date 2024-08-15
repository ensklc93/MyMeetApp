import { useState } from "react"


const NumberOfEvents = ({ events }) => {
  const [eventCount, setEventCount] = useState(32); // default to 32 events

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEventCount(value)
};

  const filteredEvents = events && events.length ? events.slice(0, Math.min(eventCount, events.length)) : [];

  return (
    <div id="numberOfEvents">
      <input
      type="text"
      className="event-numbers"
      placeholder="events"
      value={eventCount}
      onChange={handleInputChange}
      aria-label="Number of events to display"
      />
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>{event.summary}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberOfEvents;
