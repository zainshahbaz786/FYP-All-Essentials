import React from "react";
import {BrowserRouter as Link} from 'react-router-dom' 
export const ThirdBar = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{backgroundColor:"#f2f2f2",color:"#38b44e"}}>Our Services</h1>

        <div className="services" style={{ display: "flex", flexWrap: "wrap" }}>
          

          {/* ALL CREDIT OF IMAGE LOGOS GOES TO icons8.com */}
          <div className="service_svg">
            {/* plumber image svg */}
            <li><Link href="#"><img src="https://img.icons8.com/ios/100/000000/plumber.png" alt=""/></Link> <figcaption> PLUMBER </figcaption></li>
          </div>
         
          <div className="service_svg">
          <li><Link href="#"><img src="https://img.icons8.com/ios/100/000000/car-service.png" alt=""/></Link> <figcaption> CAR MECHANIC </figcaption></li>
          </div>
          
          <div className="service_svg">
            <li><Link href="#"><img src="https://img.icons8.com/external-itim2101-lineal-itim2101/100/000000/external-electrician-male-occupation-avatar-itim2101-lineal-itim2101.png" alt=""/></Link><figcaption> ELECTRICIAN </figcaption></li>
          </div>
         
          <div className="service_svg">
          <li><Link href="#"><img src="https://img.icons8.com/ios-filled/100/000000/butcher.png" alt=""/></Link><figcaption> BUTCHER( kasai) </figcaption></li>
         
          </div>

          <div className="service_svg">
          <li><Link href="#"><img src="https://img.icons8.com/ios/100/000000/carpenter.png" alt=""/></Link><figcaption> CARPENTER </figcaption></li>
         
          </div>


        </div>
        <br/>
        <br/>
        <br/>

      </div>
    </>
  );
};
