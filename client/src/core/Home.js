import React from 'react'
import '../styles.css'
import { API } from './../backend';
import Base from './Base';


const Home = () => {
    console.log("API IS", API)
  return (
    <Base title="Open Source Programs and Internships">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 text-light d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">Search for your Opensource Opportunities ends here</h1>
          <h4 className="text-center">Dive into Open Source: Intern with Impact and Purpose</h4>
          
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <img className="logo" src="https://www.opensourceforu.com/wp-content/uploads/2022/03/Open-Source-Maturity-Model.jpg" alt="Logo" style={{"border-radius":"50%"}}/>
        </div>
      </div>
    </div>
    </Base>
  )
}

export default Home