import React from "react";
import './css/home.css';
import Header from "./header";
import Benefits from "./benefits";
import Contact from "./contact";
import Course from "./course";

const Home = () => {
    return(
        <div>
        <Header/>
        <Benefits/>
        <Course/>
        <Contact/>
        </div>
    )
}

export default Home;