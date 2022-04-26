import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';
import { Nav } from './app/nav';

import { FactionList } from './features/factions/FactionList';
import { ZoneList } from './features/zones/ZoneList';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <div id='container'>
          <Routes>
            <Route
              path="/"
              element={ <FactionList /> }
              />
            <Route
              path="/zones"
              element={ <ZoneList /> }
              />
            <Route
              path="*"
              element={
                <Navigate to="/" replace />
              }
              />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
