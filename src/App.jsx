import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddCrewmate from './components/AddCrewmate';
import CrewmateGallery from './components/CrewmateGallery';
import UpdateCrewmate from './components/UpdateCrewmate';
import CrewmateDetails from './components/CrewmateDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <a href="/">Home</a>
          <a href="/create">Create a Teammate!</a>
          <a href="/gallery">Crewmate Gallery</a>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<AddCrewmate />} />
            <Route path="/gallery" element={<CrewmateGallery />} />
            <Route path="/crewmates/:id" element={<UpdateCrewmate />} />
            <Route path="/crewmates/details/:id" element={<CrewmateDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;