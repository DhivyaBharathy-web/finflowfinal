import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BenefitsCard"
import "./benefits.css"

const Benefits = () => {
  return (
    <div className="benefits-page" id="benefits"> {/* Add the class here */}
      <Back className="back" title='OUR BENEFITS' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </div>
  )
}

export default Benefits
