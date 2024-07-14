import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import { enableDarkMode, disableDarkMode } from "./darkMode";
import { enableLightMode, disableLightMode } from "./lightMode";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode) {
      disableDarkMode();
      enableLightMode();
    } else {
      enableDarkMode();
      disableLightMode();
    }
  };

  return (
    <React.Fragment>
      <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <CurrentLocation />
      </div>
      <button className="toggle-button" onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </React.Fragment>
  );
}

export default App;
