import React from 'react'
import './NewsCard.css'


const NewsCard = ({image, buttonText, description, linkText}) => {
  return (
    <div className="news-box-container">
            <div className="news-image-box">
              <img src={image} alt='img'/>
            </div>
            <button className="recover-news-button">
              {buttonText}
            </button>
            <p>
             {description}
            </p>
            <div className="learn-more">
              <h4>{linkText}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="#0D6EFD"
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
  )
}

export default NewsCard
