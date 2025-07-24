import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState({})

  return (
    <UserContext.Provider value={{ isLoggedin, userData, setIsLoggedin, setUserData }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
