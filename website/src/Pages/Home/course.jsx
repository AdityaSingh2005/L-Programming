import React from 'react';
import './css/course.css';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <section className="course">
      <div className="course__content">
        <div className="course__text">
          <h2>Full Stack Mastery:<br/>Unleash Your Coding Potential Now!</h2>
         <Link to='./notes'> <button>Check Now</button> </Link>
        </div>
      </div>
      <div className="course__image">
        <img src="img.png" alt="Course Image" className='img2'/>
      </div>
    </section>
  );
};

export default Course;
