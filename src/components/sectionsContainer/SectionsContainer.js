import  { useContext } from "react";

import OptionsContext from '../../contexts/OptionsContext';

import './sectionsContainer.css'

import Stack from '../sections/stack/Stack';
import ContactMe from "../sections/contactMe/ContactMe";
import Navbar from "../sections/navbar/Navbar";
import AboutMe from '../sections/aboutMe/AboutMe';
import { Footer } from '../sections/footer/Footer';
import History from '../sections/history/History';
import Proyects from '../sections/proyects/Proyects';
import Header from '../sections/header/Header';

const SectionsContainer = () => {

  const { openMenu , handleMenuOpening} = useContext(OptionsContext);

  return (
    <div className={openMenu ? "app-container-reduced" : "app-container"}
      onClick={ openMenu ? handleMenuOpening : undefined}>
      <Navbar />
      <Header/>
      <AboutMe/>
      <History/>
      <Stack/>
      <Proyects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default SectionsContainer