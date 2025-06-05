import React from "react";
import "./NewsEvent.css";
import News1 from "../assets/images/news1.png";
import News2 from "../assets/images/news2.png";
import NewsCard from "./NewsCard";



const newsData = [
    {image:News1,
        buttonText: "Hospital Patients Recover",
        description:"Handover of Medical ICU beds and accessories supported to Emergency",
        linkText: "Learn More",
    },
     {image:News2,
        buttonText: "Hospital Patients Recover",
        description:"Handover of Medical ICU beds and accessories supported to Emergency",
        linkText: "Learn More",
    },
     {image:News1,
        buttonText: "Hospital Patients Recover",
        description:"Handover of Medical ICU beds and accessories supported to Emergency",
        linkText: "Learn More",
    },
]


const NewsEvent = () => {
  return (
    <section className="section8">
      <div className="news-event-container">
        <div className="news-title">
          <h1>News & Events</h1>
        </div>

        <div className="three-news-box-container">
          {newsData.map((news, index) => (
            <NewsCard key={index} image={news.image} buttonText={news.buttonText} description={news.description} linkText={news.linkText}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
