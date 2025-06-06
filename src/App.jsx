import React from "react";
import HeroSection from './components/HeroSection'
import Journey from "./components/Journey";
import HealthServices from "./components/HealthServices";
import Schedule from "./components/Schedule";
import WhyChoose from "./components/WhyChoose";
import Consultants from "./components/Consultants";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Department from "./components/Department";
import OurCapacity from "./components/OurCapacity";
import NewsEvent from "./components/NewsEvent";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";




export default function App(){
  return(
    <div>
      <HeroSection/>
      <Journey/> 
      <HealthServices/>
      <Schedule/>
      <WhyChoose/>
      <Consultants/> 
       <Department/>
      <OurCapacity/> 
       <NewsEvent/> 
       <Faq/> 
      <Testimonial/>
      <Footer/>
    </div>
  )
}