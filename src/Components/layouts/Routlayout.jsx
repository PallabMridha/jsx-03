import React from 'react'
import Hader from './Hader'
import Fouter from './Fouter'
import { Outlet } from 'react-router-dom'

const Routlayout = () => {
  return (
    <>
    <Hader/>
    <Outlet/>
    <Fouter/>
    </>
  )
}

export default Routlayout
