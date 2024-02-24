import React, { useState } from "react"
import { Outlet } from "react-router"
import Navbar from "./component/Navbar"
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
