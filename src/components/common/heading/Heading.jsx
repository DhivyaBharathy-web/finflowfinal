import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div id='heading'>
        <h3>{title} </h3>
        <h1>{subtitle} </h1>
      </div>
    </>
  )
}

export default Heading
