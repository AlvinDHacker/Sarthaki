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
import AboutUs from './pages/AboutUs'
import Clients from './pages/Clients'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="ourTeam" element={<OurTeam />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="services" element={<Services />} />
    <Route path="industries" element={<Industries />} />
    <Route path="clients" element={<Clients />} />
    <Route path="testimonials" element={<Testimonials />} />
    <Route path="resources" element={<Resources />} />
    <Route path="careers" element={<Careers />} />
    <Route path="contactUs" element={<ContactUs />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)