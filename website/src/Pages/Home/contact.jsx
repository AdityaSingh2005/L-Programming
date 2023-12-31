import React from "react";
import "./css/contact.css";
import { Link } from 'react-scroll';

const Contact = () => {
    return (
        <section className="contactPage" id="contactPage">
             <div id="contact">
               <h1 className="contactPageTitle">Contact Me</h1>
               <span className="contactDesc">Fill out the form to reach me.</span>

               <form className="contactForm" >
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea name="message" rows="5" className="msg" placeholder="Your Message" />

                <button type="submit" value="send" className="submitBtn">Submit</button>

               </form>

             </div>
        </section>
    )
}

export default Contact;