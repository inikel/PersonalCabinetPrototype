import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [isAuth, setAuth] = useState(isUserExist())
  const [isFetching, setFetching] = useState(true)

  function isUserExist() {
    return !!localStorage.getItem('user')
  }

  const credentials = {
    login: 'Sincere@april.biz',
    password: 'Leanne Graham'
  }

  const validateUser = (login, password, data) => {
    if (data) {
      let user = data.filter(user => {
        return (user.email == login && user.name == password)
      })

      setAuth(true)
      localStorage.setItem('user', JSON.stringify(user[0]))
    }
  }

  const loginUser = () => {
    return validateUser(credentials.login, credentials.password, JSON.parse(localStorage.getItem('data')))
  }

  return (
    <AuthContext.Provider value={{credentials, setAuth, isAuth, loginUser, isFetching, setFetching}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
