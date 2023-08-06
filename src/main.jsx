import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Home from './pages/Home'
import OurTeam from './pages/OurTeam'

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="ourTeam" element={<OurTeam />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)