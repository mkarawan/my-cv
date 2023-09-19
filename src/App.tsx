import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Experience from './components/Exp/Exp';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Experience/>
        <Skills/>
        <Education/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
