import React, { createContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ToggleBtn from './ToggleBtn'



const ToggleTheme = () => {

    const [theme,setTheme] = useState("light")

    const changeTheme = ()=>{
        theme === "light"? setTheme("dark") : setTheme("light");
    }
    const styles = {
        backgroundColor: theme === "light" ? "white":"black",
        height: "100vh"

    }

  return (
    <div style={styles}>
      <ThemeContext.Provider value={{theme,changeTheme}}>
        <ToggleBtn/>
      </ThemeContext.Provider>
    </div>
  )
}

export default ToggleTheme
