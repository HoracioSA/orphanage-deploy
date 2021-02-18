import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import '../styles/pages/home.css'
import logoimg from '../../public/images/Logo.svg'

export default function Landing(){
    return (
        <div id="home-page">
      <div className="content-wrapper">
          <img src={logoimg} alt="happy"/>
      <main>
        <h1>Give happyness to the world</h1>
        <p>Visit a orfanate and changa someone's day</p>
      </main>
      <div className="location">
        <strong>Dnipro</strong>
        <span>Street: Titova</span>
      </div>
      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
      </Link>
      </div>
    </div>
  );
       
}