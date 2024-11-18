import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src='/images/logo.svg' alt='FinFlow Logo' className='logo-img' />
            <Link to="/">
              <h1 style={{color: '#2d67d3'}}>FINFLOW</h1>
            </Link>
            <div className='tagline' style={{ marginLeft: '20px' }}>
              <span style={{ fontSize: '14px', color: '#474572', fontWeight: 'normal' }}>
                CONQUER COMPLEXITY | EMBRACE EFFICIENCY | AUTOMATE YOUR MESSAGE CONVERSION
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
