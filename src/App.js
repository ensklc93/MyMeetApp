import { getEvents, extractLocations } from "./api"
import { useEffect, useState } from "react"
import EventList from "./components/EventList"
import CitySearch from "./components/CitySearch"
import Event from "./components/Event"
import NumberOfEvents from "./components/NumberOfEvents"
import "./App.css"

const App = () => {
  const [allLocations, setAllLocations] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [events, setEvents] = useState([])
  const [currentCity, setCurrentCity] = useState("See all cities")

  const fetchData = async () => {
    const allEvents = await getEvents()
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE))
    setAllLocations(extractLocations(allEvents))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [currentCity])

  useEffect(() => {
    fetchData()
  }, [currentNOE])

  return (
    <div className="App">
      <EventList events={events} />
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <Event />
      <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
    </div>
  )
}

export default App
