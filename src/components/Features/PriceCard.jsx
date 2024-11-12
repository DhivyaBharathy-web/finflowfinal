import React from "react";
import { price } from "../../dummydata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faLock, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faWorm } from '@fortawesome/free-solid-svg-icons';



const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div key={index} className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            {val.price === "49K" ? (
              <FontAwesomeIcon icon={faSitemap} />
            ) : val.price === "79K" ? (
              <FontAwesomeIcon icon={faWorm} />
            ) : val.price === "14K" ? (
              <FontAwesomeIcon icon={faEnvelopesBulk} />
            ) : val.price === "149K" ? (
              <FontAwesomeIcon icon={faLock} />
            ) : (
              val.price
            )}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>LEARN MORE</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
