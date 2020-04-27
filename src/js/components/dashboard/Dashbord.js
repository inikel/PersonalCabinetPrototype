import React, {useContext} from 'react'
import {AuthContext} from "@/js/contexts/authContext";
import UploadVideo from "@/js/components/dashboard/uploadVideo";
import Videos from "@/js/components/dashboard/Video";

const Dashboard = () => {
  const {setAuth} = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem('user'))

  const signOut = () => {
    setAuth(false)
    localStorage.removeItem('user')
  }

  if (user) {
    return (
      <section className="dashboard">
        <div className="dashboard__quit" onClick={signOut}>Quit Dashboard</div>
        <p style={{textAlign: 'center', fontSize: 32}}>Your credentials are such:</p>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Phone:</b> {user.phone} </p>
        <p><b>Web-site:</b> {user.website}</p>
        <h3>Your videos: </h3>
        <Videos/>
        <UploadVideo />
      </section>
    )}
    else {
      return <div/>
    }
}

export default Dashboard
