import { BrowserRouter } from "react-router-dom";

import { OptionsProvider } from "./contexts/OptionsContext";

import OptionsMenu from "./components/optionsMenu/OptionsMenu";
import SectionsContainer from "./components/sectionsContainer/SectionsContainer";

function App() {
  return (
    <BrowserRouter>
      <OptionsProvider>
        <OptionsMenu />
        <SectionsContainer/>
      </OptionsProvider>
    </BrowserRouter>
  );
}

export default App;