import React from 'react'
import Now from "../sections/now/Now";
import CV from "../sections/cv/CV";
import ContactMe from "../sections/contactMe/ContactMe";
import Navbar from "../sections/navbar/Navbar";
import  { useContext } from "react";
import OptionsContext from '../../contexts/OptionsContext';
import AboutMe from '../sections/aboutMe/AboutMe';
import { Footer } from '../sections/footer/Footer';
import './sectionsContainer.css'

const SectionsContainer = () => {

    const { openMenu , handleMenuOpening} = useContext(OptionsContext);

  return (
    <div className={`app-container ${openMenu ? "app-container-reduced" : ""}`}
    onClick={ openMenu ? handleMenuOpening : undefined}>
      <Navbar />
      <AboutMe/>
      <CV/>
      <Now/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default SectionsContainer