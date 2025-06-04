import React from 'react'
import './DepartmentCard.css'
import Heart from '../assets/images/heart.png'

const DepartmentCard = ({image, title}) => {
  return (
    <div className="emergency-container">
          <div className="emergency-department-container">
            <div className="heart-logo">
              <div className="heart-circle">
                <img src={Heart}></img>
              </div>
            </div>
            <h3>Emergency Deparment</h3>
            <div className="view-details">
              <h4>View Detail</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right-icon lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </div>
          </div>
        </div>
  )
}

export default DepartmentCard
