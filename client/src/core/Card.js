import React from 'react'

  const Card = ({name,link,logo,isPaid,description,duration,location,organization}) => {
    return (
     
          <div className="card-container">
        <div className="card custom-card">
          <img src={logo} alt="Logo" className="card-logo"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-company">{organization}</div>
            <div className="row">
              <div className="col-6">
                <div className="card-ispaid">isPaid: {isPaid}</div>
                <div className="card-location">Location: {location}</div>
              </div>
              <div className="col-6 text-end">
                <div className="card-location">Duration: {duration}</div>
              </div>
            </div>
            <div className="card-description">
              <p>{description}</p>
              <a href= {link} target="_blank" className="checkout" rel="noreferrer">Checkout</a>
            </div>
          </div>
        </div>
      </div>
  
    )
  }

export default Card;