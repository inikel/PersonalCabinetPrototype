import React, {useContext, useState} from 'react'
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashbord";
import {AuthContext} from "./contexts/authContext";
import Loading from "@/js/components/auth/Loading";

const Main = () => {
  const {isAuth, isFetching, setFetching} = useContext(AuthContext)

  if (isFetching) {
    return <Loading/>
  } else if (isAuth) {
    return <Dashboard/>
  } else {
    return <Login />
  }
}

export default Main
