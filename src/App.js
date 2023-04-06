import NavBar from './components/NavBar';
import './assets/css/App.css';

import WeatherPanel from './components/Weather';

function App() {
  return (
    <div className="App">
      < NavBar/>
      <WeatherPanel/>
    </div>
  );
}

export default App;
