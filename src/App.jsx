import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar"

import "./style/components/app.sass"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

