import React from "react";
import "./Department.css";
import Heart from "../assets/images/heart.png";
import DepartmentCard from './DepartmentCard'


const departmentData = [
    { image: Heart, title: "Emergency Department"},
    { image: Heart, title: "Emergency Department"},
    { image: Heart, title: "Emergency Department"},
    { image: Heart, title: "Emergency Department"},
    { image: Heart, title: "Emergency Department"},
];


const Department = () => {
  return (
    <section className="section6">
      <div className="department-container">
        <div className="department-header">
          <h1 className="department-title">Departments</h1>
          <p className="department-paragraph">
            The history of hospital service in Nepal starts in the year 1889
            with the establishment of Bir Hospital, the oldest hospital now
            providing general care to tertiary care to the people of Nepal. Bir
            hospital is the first teaching hospital for compounders, dresser and
            later nurses.
          </p>
        </div>
        <div className="five-department-card">
            {departmentData.map((dept, index) => (
                <DepartmentCard key={index} image={dept.image} title={dept.title}/>
            ))}
        </div>
       
      </div>
    </section>
  );
};

export default Department;
