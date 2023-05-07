import React, { useState } from 'react'
import animal from "../../assets/animal.png"
import './Home.css'
import Collection from '../Collections/Collection';
import Banner from '../Banner';
const Home = ({bannerImage,desc,faq}) => {
  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <>
       <div className="banner">
      <div className="banner-image">
        <img src={bannerImage} alt="animal"/>
      </div>
      {window.location.pathname === '/' &&  
      <div className="banner-content">
        <Banner/>
    
      </div>}

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
   
    </div>
    <div className='faq'>
    {faq ? 
     <div className='faq'>
      <h3>FAQ,s</h3>
      <p >
    {faq}
    </p>
      </div>:""}
    </div>
    
        


    
    </>
  )
}

export default Home

