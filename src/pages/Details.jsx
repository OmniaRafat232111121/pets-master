import React from 'react'
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import { useParams } from 'react-router-dom';
import data from '../data';

const Details = () => {
    const { collectionName } = useParams();
    const filteredData = data.filter(item => item.name === collectionName);
    console.log(filteredData[0])
    return (
    <div >
      <Header/>
      <Home  
      bannerImage={filteredData["0"].banner} 
       desc={filteredData["0"].desc}
       faq={filteredData["0"].faq}

       />
    </div>
  )
}


export default Details;
