import React from 'react';
import { properties } from './Card'; 
import { Card } from './Card';

// import { useState, useEffect} from "react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import AddToFavourites from "./AddToFavourites";

// export default function Details(){

 
//   const [data, setData] = useState([]);
//   useEffect(() => {
//       fetch('https://mock.apidog.com/m2/520918-481047-default/6967467')
//         .then((response) => response.json())
//         .then((data) =>{
//           const {properties} = data;
//           setData(properties);
//           console.log(properties);
//         })
//     }, []);
//   return (
//     <>
//   <section className="rent-section">
//           <div className="rent-section-container">   
//               <h2 className="home-title">Buy your dream house</h2>
//               <div className="listed-section-container">
//               <div className="details-section-card">
//               {data.slice(0,5).map((data, index) =>{
//                return ( 
//                   <div key={data.id} id={data.id} className="details-card">
//                       <h2 className="card-details-title">{data.name}</h2>
//                       <img src={data.imageUrl}/>
                    
//                       <div className="button-container">
//                       <Link to={"/RentSection"}><button className="rental-button">See more</button></Link>
//                       </div> 
//                   </div>
//               )})}
//               </div>
//               </div>
//           </div>
//  </section>
//   <section className="rent-section">
//   <div className="rent-section-container">   
//       <h2 className="home-title">Buy your dream house</h2>
//       <div className="listed-section-container">
//       <div className="details-section-card">
//       {data.slice(0,5).map((data, index) =>{
//        return ( 
//           <div key={data.id} id={data.id} className="details-card">
//               <h2 className="card-details-title">{data.name}</h2>
//               <img src={data.imageUrl}/>
//               <div className="button-container">
//               <Link to={"/BuySection"}><button className="rental-button">See more</button></Link>
//               </div>
//           </div>
//       )})}
//       </div>
//       </div>
//   </div>
// </section>
// </>
//   )
// }

export default function Details() {
  // const property = properties.find(property => property.id === property.id);
  return (
    <div>
      <h2>Detalii proprietate</h2>
      {/* Afiseaza detalii despre proprietate */}
      {properties && (
        <Card
          title={properties.name}
          image={properties.imageUrl}
        />
      )}
    </div>
  );

}

