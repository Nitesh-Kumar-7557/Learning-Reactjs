import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToggleBtn = () => {

    const {changeTheme} = useContext(ThemeContext)

  return (
    <div>
      <button onClick={changeTheme}>Click me!</button>
    </div>
  )
}

export default ToggleBtn
