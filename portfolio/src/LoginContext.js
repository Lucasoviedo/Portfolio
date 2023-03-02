import { useState } from "react";
import { createContext } from "react";

const LogInContext = createContext();

const LogInProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenuOpening = () => {
        // if(e.screen.heigth){
        //   window.scroll(e.screen.heigth)
        // }
        // console.log("si")
        setOpenMenu(!openMenu)
    }
    const data = { openMenu, handleMenuOpening };

    return <LogInContext.Provider value={data}>{children}</LogInContext.Provider>;
};

export { LogInProvider };
export default LogInContext;