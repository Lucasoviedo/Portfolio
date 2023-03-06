import { BrowserRouter } from "react-router-dom";
import OptionsMenu from "./components/optionsMenu/OptionsMenu";
import { OptionsProvider } from "./contexts/OptionsContext";
import AppContainer from "./components/appContainer/AppContainer";

function App() {
  return (
    <BrowserRouter>
      <OptionsProvider>
        <OptionsMenu />
        <AppContainer/>
      </OptionsProvider>
    </BrowserRouter>
  );
}

export default App;