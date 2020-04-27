import React, {useContext, useState} from 'react'
import {AuthContext} from "../../contexts/authContext";

function Login() {
  const {credentials, loginUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formElements = e.target.elements
    const credentials = {
      email: formElements.login.value,
      password: formElements.password.value
    }

    if (credentials.email && credentials.password) {
      loginUser()
    }
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login"></label>
        <input type="text" id="login" name="login" placeholder="login"/>
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password"  id="password" name="password" placeholder="password"/>
      </div>
      <div>
        <input type="submit" value="SUBMIT"/>
      </div>
      <p>
        mail: {credentials.login}
        <br/>
        password: {credentials.password}
      </p>
    </form>
  )
}

export default Login
