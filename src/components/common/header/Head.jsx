import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        
          <div className='logo'>
            <img src='/images/logo.svg' alt='FinFlow Logo' className='logo-img' />
            <h1 >FINFLOW </h1><div className='tagline' style={{marginLeft: '20px'}}>
            <span  style={{fontSize: '14px', color: '#474572', fontWeight: 'normal'}}>CONQUER COMPLEXITY, EMBRACE EFFICIENCY: AUTOMATE YOUR MESSAGE CONVERSION</span>
          </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
