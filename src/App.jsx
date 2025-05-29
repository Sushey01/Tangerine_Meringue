import React from "react";
import HeroSection from './components/HeroSection'
import Journey from "./components/Journey";
import HealthServices from "./components/HealthServices";
import Schedule from "./components/Schedule";



export default function App(){
  return(
    <div>
       <HeroSection/>
      <Journey/> 
      <HealthServices/>
      <Schedule/>
    </div>
  )
}