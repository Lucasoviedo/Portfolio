import React from 'react'
import Home from "../../components/home/Home";
import Now from "../../components/now/Now";
import CV from "../../components/cv/CV";
import ContactMe from "../../components/contactMe/ContactMe";
import Navbar from "../../components/navbar/Navbar";
import LogInContext  from '../../LoginContext'
import  { useContext } from "react";

const AppComplete = () => {
    const { openMenu} = useContext(LogInContext);
  return (
    <div className={`app-container ${openMenu ? "app-container-reduced" : ""}`}
        
    >
      <Navbar />
      <Home/>
      <CV/>
      <Now/>
      <ContactMe/>
    </div>
  )
}

export default AppComplete