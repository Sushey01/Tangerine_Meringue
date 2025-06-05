import React from 'react'
import './OurCapacity.css'
import './CapacityCard'
import CapacityCard from './CapacityCard'
import Capacity from '../assets/images/capacity.svg'



const capacityData = [
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
    { image: Capacity, title:"Emergency"},
]



const OurCapacity = () => {
  return (
    <section className="section7">
        <div className="capacity-container">
            <h1 className="capacity-title">
                Our Capacity
            </h1>

            <div className="ten-capacity-boxes">
                {capacityData.map((capt, index) => (
                    <CapacityCard key={index} image={capt.image} title={capt.title}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default OurCapacity
