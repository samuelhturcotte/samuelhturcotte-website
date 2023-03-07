import './App.css';
import { Navigation } from './components/header/header';
import Responsive from './components/responsive/responsive';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Recall from './components/case-studies/recall/recall';


function App() {
  return (
    <div className="App">
      <header>

        <Navigation />

      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/recall" element={<Recall />} />
          <Route path="/responsive" element={<Responsive />} />
        </Routes>
      </main>


    </div>
  );
}

export default App;
