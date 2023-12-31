import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer__left">
        <h2 style={{color:'rgb(216, 138, 255)', margin:'0'}}>L Programming</h2>
          <p style={{lineHeight:'23px'}}>Empowering learners with cutting-edge courses,<br/> our platform is a beacon of knowledge, offering<br/> expert-crafted content, industry-relevant<br/> projects, and personalized guidance. </p>
        
        </div>
        <div className="footer__center">
          <h2 style={{color:'rgb(255, 220, 130)', margin:'0'}}>Aditya Singh</h2>
          <p style={{lineHeight:'23px'}}>Hola!! A FullStack Software Developer<br/> and a Computer Science student, bringing<br/> crazy projects and simple to learn courses<br/> for you all.</p>
        </div>
        <div className="footer__right">
          <div className="social-icons">
            <a href="https://www.instagram.com/_singh_adiitya/" target="_blank" rel="noopener noreferrer">
              <img src="instagram.webp" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/adiii11/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/AdityaSingh2005" target="_blank" rel="noopener noreferrer">
              <img src="github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;