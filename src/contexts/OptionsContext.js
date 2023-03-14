import { useState } from "react";
import { createContext } from "react";

const OptionsContext = createContext();

const OptionsProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenuOpening = () => {
        setOpenMenu(!openMenu)
    }
    const data = { openMenu, handleMenuOpening };

    return <OptionsContext.Provider value={data}>{children}</OptionsContext.Provider>;
};

export { OptionsProvider };
export default OptionsContext;