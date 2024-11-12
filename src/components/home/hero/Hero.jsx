import React from "react";
import Heading from "../../common/heading/Heading";
import { Link } from 'react-router-dom';
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="WELCOME TO FINFLOW" title="Eliminate chaos, enable seamless conversion" />
            <p className="hero-description">
              Stop struggling with manual message format conversions between MX, MT, Fedwire, and ISO20022. Introducing FinFlow, your one-stop solution for automated, error-free message processing. 
             
            </p>
            <div className="button-group">
              <Link to="/about">
                <button className="btn btn-primary">
                  GET STARTED NOW 
                  <i className="fa fa-long-arrow-alt-right" aria-hidden="true"></i>
                </button>
              </Link>
              <Link to="/features">
                <button className="btn btn-secondary">
                  EXPLORE FEATURES 
                  <i className="fa fa-long-arrow-alt-right" aria-hidden="true"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
