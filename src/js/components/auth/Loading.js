import React, {useContext} from 'react'
import {AuthContext} from "@/js/contexts/authContext";

const Loading = () => {
  const {setFetching} = useContext(AuthContext)

  const fetchUrl = 'https://jsonplaceholder.typicode.com/users'

  let getUsers = async () => {
    const response = await fetch(fetchUrl)
    const json = await response.json()
    let data = [...json]
    localStorage.setItem('data', JSON.stringify(data)) //that responds to imitation of back-end
    setFetching(false)
    console.log(data)
  }

  getUsers()

  return (
    <p> LOADING </p>
  )
}

export default Loading
