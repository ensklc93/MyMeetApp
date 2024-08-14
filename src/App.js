import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import "./App.css"

const App = () => {
  return (
    <div className="App">
       <EventList />
       <CitySearch />
       <Event />
       <NumberOfEvents />
    </div>
  )
}

export default App
 