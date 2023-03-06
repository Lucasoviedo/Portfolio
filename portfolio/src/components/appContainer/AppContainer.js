import React from 'react'
import Now from "../content/now/Now";
import CV from "../content/cv/CV";
import ContactMe from "../content/contactMe/ContactMe";
import Navbar from "../content/navbar/Navbar";
import  { useContext } from "react";
import OptionsContext from '../../contexts/OptionsContext';
import AboutMe from '../content/aboutMe/AboutMe';

const AppContainer = () => {

    const { openMenu , handleMenuOpening} = useContext(OptionsContext);

  return (
    <div className={`app-container ${openMenu ? "app-container-reduced" : ""}`}
    onClick={ openMenu ? handleMenuOpening : undefined}>
      <Navbar />
      <AboutMe/>
      <CV/>
      <Now/>
      <ContactMe/>
    </div>
  )
}

export default AppContainer