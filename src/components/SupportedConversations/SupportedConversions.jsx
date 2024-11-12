import React from "react"
import "./SupportedConversions.css"
import { conversionData, connectivityAdapters } from "../../dummydata"
import Heading from "../common/heading/Heading"

const ConversionCard = ({ title, items }) => {
  return (
    <div className="conversion-card">
      <div className="content flex">
        <div className="left">
          <div className="img">
            <img src="/images/arrow.png" alt={title} />
          </div>
        </div>
        <div className="text">
          <h1>{title}</h1>
          <div className="items-list">
            {items.map((item, index) => (
              <div key={index} className="item">
                <i className="fas fa-exchange-alt"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const AdapterCard = ({ name }) => {
  const getImageSrc = (adapterName) => {
    switch (adapterName) {
      case "SFTP":
        return "/images/ftp_412502.png"
      case "IBM MQ":
        return "/images/ibm-mq.png"
      case "KAFKA":
        return "/images/kafka.webp"
      case "API":
        return "/images/apiimage.png"
      default:
        return "/images/default.png"
    }
  }

  return (
    <div className="adapter-card">
      <div className="img">
        <img src={getImageSrc(name)} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

const SupportedConversions = () => {
  return (
    <>
      {/* Small Navigation Bar */}
      <nav className="mini-nav">
        <div className="container">
          
        </div>
      </nav>

      <section className="intro" id="intro">
        <div className="container">
          <h2>Introduction to Financial Message Conversions</h2>
          <p>In today's global financial landscape, seamless communication between different messaging standards is crucial. Our conversion solutions bridge the gap between various financial message formats, ensuring smooth international transactions and compliance with evolving standards.</p>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="step-content">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-icon">Message Receipt</div>
              </div>
              <div className="step-connector">
                <img src="/images/arrowback.png" alt="connector" />
              </div>
              <div className="step">
                <div className="step-icon">Format Analysis</div>
              </div>
              <div className="step-connector">
              <img src="/images/arrowback.png" alt="connector" />
              </div>
              <div className="step">
                <div className="step-icon">Conversion Process</div>
              </div>
              <div className="step-connector">
              <img src="/images/arrowback.png" alt="connector" />
              </div>
              <div className="step">
                <div className="step-icon">Validation</div>
              </div>
              <div className="step-connector">
              <img src="/images/arrowback.png" alt="connector" />
              </div>
              <div className="step">
                <div className="step-icon">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="conversions-section padding" id="conversions">
        <Heading title="CONVERSIONS" subtitle="Supported Message Conversions" />
        <div className="container grid2">
          {Object.entries(conversionData).map(([key, value]) => (
            <ConversionCard key={key} title={key.replace('_', ' to ').toUpperCase()} items={value} />
          ))}
        </div>
      </section>
      
      <section className="adapters-section padding" id="connectivity">
  <Heading title="CONNECTIVITY" subtitle="Supported Connectivity Adapters" />
  <div className="container">
    <div className="adapters-horizontal">
      {connectivityAdapters.slice(0, 4).map((adapter, index) => ( // Display only the first four adapters
        <React.Fragment key={index}>
          <AdapterCard name={adapter} />
          {index < 3 && ( // Show connectors between adapters, up to three times
            <div className="adapter-connector">
              
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default SupportedConversions