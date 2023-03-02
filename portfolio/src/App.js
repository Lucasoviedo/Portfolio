import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Now from "./components/now/Now";
import CV from "./components/cv/CV";
import ContactMe from "./components/contactMe/ContactMe";
import OptionsMenu from "./components/optionsMenu/OptionsMenu";
import { useState } from "react";



import { LogInProvider } from "./LoginContext";
import AppComplete from "./components/appComplet/AppComplete";



function App() {

  // const [openMenu, setOpenMenu] = useState(false)

  // const handleMenuOpening = (e) => {
  //   // if(e.screen.heigth){
  //   //   window.scroll(e.screen.heigth)
  //   // }
    
  //     setOpenMenu(!openMenu)
  // }

  console.log("si")
  return (
    <BrowserRouter>
    <LogInProvider>

      <OptionsMenu />
      
     <AppComplete/>
    </LogInProvider>
    </BrowserRouter>
    // <HashRouter>
    //   <OptionsMenu/>
    //   <div className={`app-container ${openMenu ? "app-container-reduced" : ""}`}
    //     onClick={ openMenu && handleMenuOpening}
    //   >
    //     <Navbar handleMenuOpening={handleMenuOpening}/>
    //     <Routes>
    //       <Route path="/Home" element={<Home/>}/>
    //       <Route path="/CV" element={<CV/>}/>
    //       <Route path="/Now" element={<Now/>}/>
    //       <Route path="/ContactMe" element={<ContactMe/>}/>
    //       <Route path="/*" element={<Home/>}/>
    //     </Routes>
    //   </div>
    // </HashRouter>
  );
}

export default App;