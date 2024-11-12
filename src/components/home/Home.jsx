import React from "react"
import AboutCard from "../about/AboutCard"
import SupportedConversions from "../SupportedConversations/SupportedConversions"
import Dashboard from "../dashboard/Dashboard"



import Hero from "./hero/Hero"



const Home = () => {
  return (
    <>
    <nav className="navbar">
      <Hero />
      <AboutCard />
      <SupportedConversions />
      <Dashboard />
      </nav>
    </>
  )
}

export default Home
