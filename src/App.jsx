import React, { useState } from "react"
import { Outlet } from "react-router"
import Signup from "./component/Signup"
import Profile from "./component/Profile"
import { color } from "framer-motion"
import Home from "./component/Home"
function App() {
  return (
    <>
    <Home/>
    <Outlet/>
    </>
  )
}

export default App
