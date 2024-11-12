import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../Features/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='FinFlow Technical Specifications' title='OUR FEATURES' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
