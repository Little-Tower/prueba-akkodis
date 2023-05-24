import React from 'react'
import { Outlet } from 'react-router-dom'

const Podcast = () => {
  return (
    <div>Podcast
      <Outlet />
    </div>
  )
}

export default Podcast