import { HashRouter } from "react-router-dom";

import { OptionsProvider } from "./contexts/OptionsContext";

import OptionsMenu from "./components/optionsMenu/OptionsMenu";
import SectionsContainer from "./components/sectionsContainer/SectionsContainer";

function App() {
  return (
    <HashRouter>
      <OptionsProvider>
        <OptionsMenu />
        <SectionsContainer/>
      </OptionsProvider>
    </HashRouter>
  );
}

export default App;