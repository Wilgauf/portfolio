import React from 'react'
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    

    <Router>
      <Home />
      {/* <span>Hello, I'm Wilson... Add a volleyball animation here with a picture of me and a 1 sentence summary</span> */}
    </Router>
  );
}

export default App;
