import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Features = () => {
  return (
    <div className="features-page" id="features">
      <Back className="back" title="OUR FEATURES"/>
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </div>
  )
}

export default Features
