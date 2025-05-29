import React from "react";
import HeroSection from './components/HeroSection'
import Journey from "./components/Journey";
import HealthServices from "./components/HealthServices";
import Schedule from "./components/Schedule";
import WhyChoose from "./components/WhyChoose";



export default function App(){
  return(
    <div>
       <HeroSection/>
      <Journey/> 
      <HealthServices/>
      <Schedule/>
      <WhyChoose/>

    </div>
  )
}