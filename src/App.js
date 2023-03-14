import { BrowserRouter } from "react-router-dom";

import { OptionsProvider } from "./contexts/OptionsContext";

import OptionsMenu from "./components/optionsMenu/OptionsMenu";
import SectionsContainer from "./components/sectionsContainer/SectionsContainer";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";

function App() {
  return (
    <BrowserRouter>
      <AccessibilityProvider>
      <OptionsProvider>
        <OptionsMenu />
        <SectionsContainer/>
      </OptionsProvider>
      </AccessibilityProvider>
    </BrowserRouter>
  );
}

export default App;