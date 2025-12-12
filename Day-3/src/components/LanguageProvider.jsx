import React, { useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageProvider = ({children}) => {
  
  const translations = {
    en: {
      greeting: "Hello World",
      message: "Welcome to my React App",
      button: "Switch to Spanish",
    },
    es: {
      greeting: "Hola Mundo",
      message: "Bienvenido a mi aplicación React",
      button: "Cambiar a Inglés",
    },
  }

  const [lang,setLang] = useState("en")

  const changeLang=()=>{
    if(lang==="en"){
        setLang("es")
    }
    else{
        setLang("en")
    }
  }





  return <div>
    <LanguageContext.Provider value={{translations,lang,changeLang}}>
        {children}
    </LanguageContext.Provider>
  </div>;
};

export default LanguageProvider;
