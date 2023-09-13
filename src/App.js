import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Game from "./Components/Game/Game";
import { createContext, useEffect, useState } from "react";

export const Data = createContext(null);

function App() {
  const [gameSettings, setGameSettings] = useState(null);
  const [isMobile, setIsmobile] = useState(!!navigator.maxTouchPoints);

  const changeGameSetting = (value) => {
    setGameSettings(value);
  };

  useEffect(() => {
    window.onresize = function mobile() {
      if (navigator.maxTouchPoints) {
        setIsmobile(true);
      } else {
        setIsmobile(false);
      }
    };
  }, [isMobile]);

  return (
    <Data.Provider value={{ gameSettings, changeGameSetting, isMobile }}>
      <Routes>
        <Route path="/" Component={Menu} />
        {gameSettings ? <Route path="game" Component={Game} /> : ""}
        <Route
          path="*"
          element={
            <h1 style={{ color: "white", textAlign: "center" }}>OOPS!!!</h1>
          }
        />
      </Routes>
    </Data.Provider>
  );
}

export default App;
