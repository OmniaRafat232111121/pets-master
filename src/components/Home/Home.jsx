import React, { useState } from 'react'
import animal from "../../assets/animal.png"
import './Home.css'
import Collection from '../Collections/Collection';
const Home = ({bannerImage,desc,faq}) => {
  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <>
       <div className="banner">
      <div className="banner-image">
        <img src={bannerImage} alt="animal"/>
      </div>
      <div className="banner-content">
     <h1>Pets Are Family Too</h1>
      </div>
      <div className="banner-round">
        <div className='banner-round-content'>
            <h2>{desc} </h2> 
            <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>


      </div>
      <div>
       
      </div>
    
    </div>
    <div className='faq'>
      
      <div>
        <h3>faq</h3>
        
  <p >
    {faq}
  </p>
        </div>


    </div>
    </>
  )
}

export default Home

