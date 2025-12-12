import React, { useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserNav from './UserNav'

const UserProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const login = (username)=>{
        setUser({username: username, isLoggedIn: true})
        
    }

    const logout = ()=>{
        setUser(null)
    }

  return (
    <div>
      <UserContext.Provider value={{user,login,logout}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider
