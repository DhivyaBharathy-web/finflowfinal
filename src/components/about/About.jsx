import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    
    <div id="about">
      <div id="nowant">
      <Back className="back" title='ABOUT US' />
      </div>
      <AboutCard />
    </div>
  )
}

export default About