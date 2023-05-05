import React, { useState } from 'react'
import './Collection.css'
import { Link } from 'react-router-dom';
import data from '../../data';

const Collection = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );  
  return (
    <div className='collections'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     <div className='image-container'>
     {filteredData.map((item) => (
       <Link key={item.id} to={`/${filteredData[0].name}`}>
     <img src={item.img} alt={item.name} />

     <h4 class="heading">{item.name}</h4>

     
   </Link>

   
   
 ))}
     </div>

    </div>
  );
}
  


export default Collection
