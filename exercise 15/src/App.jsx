import { useState } from "react";
import LanguageContex from "./LanguageContex";
import LanguageComponent from "./LanguageComponent";


const App = () => {
  const [language, setLanguage] = useState('eng');
  const toggleLanguage = () => {
    setLanguage((prev)=>(prev === "eng" ? "esp" : "eng"))

  }

  return (
    <>
      <LanguageContex.Provider value={language}>
        <h1>Theme contex</h1>
        <button onClick={toggleLanguage}>Switch to {language === "eng" ? "esp" : "eng"}</button>
        <LanguageComponent />
           </LanguageContex.Provider>
    </>
  );
};

export default App;
