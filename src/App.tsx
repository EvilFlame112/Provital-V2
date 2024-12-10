import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Barele from './components/colourelements/Barele';
import LifestylePillars from './components/carousel/LifestylePillars';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Barele />
      <LifestylePillars />
    </>
  )
}

export default App
