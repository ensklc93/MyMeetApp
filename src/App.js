import { getEvents, extractLocations } from "./api"
import { useEffect, useState } from "react"
import EventList from "./components/EventList"
import CitySearch from "./components/CitySearch"
import NumberOfEvents from "./components/NumberOfEvents"
import CityEventsChart from "./components/CityEventsChart"
import EventGenresChart from "./components/EventGenresChart"
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert"
import "./App.css"

const App = () => {
  const [allLocations, setAllLocations] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [events, setEvents] = useState([])
  const [currentCity, setCurrentCity] = useState("See all cities")
  const [infoAlert, setInfoAlert] = useState("")
  const [errorAlert, setErrorAlert] = useState("")
  const [warningAlert, setWarningAlert] = useState("")

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
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert(
        prevState =>
          (prevState =
            "User is currently offline. Please be sure to check online for the most up-to-date list.")
      )
    }
    fetchData()
  }, [currentCity, currentNOE])

  return (
    <div className="App">
      <h1>MyMeet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container"> 
        <CityEventsChart
          allLocations={allLocations}
          events={events}
        />
        <EventGenresChart events={events} />
      </div>
      <EventList events={events} />
    </div>
  )
}

export default App
