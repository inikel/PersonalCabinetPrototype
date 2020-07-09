import React from 'react'

const Videos = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const videos = []

  for (let item in user.company) {
    videos.push(<div className="video" key={user.company[item]}>{user.company[item]}</div>)
  }

  if (videos) {
    return <div className="videos">{videos}</div>
  } else {
    return <p>no videos yet..</p>
  }
}

export default Videos
