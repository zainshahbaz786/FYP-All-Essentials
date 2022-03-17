import React from 'react'
import MapIntegration from './MapIntegration'
// import team from './team.jpg'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { Map, GoogleApiWrapper } from 'google-maps-react';

//                          finding place for this logic

// const  mapFeature=()=>{
//     let map;

//     function initMap() {
//         /*global google*/
//       map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 33.7641472, lng: 72.7482368 },
//         zoom: 10,
//         // zoom level properties
//         // 1:world  ,  5:landmass, content  ,  10:city,  15:streets,  20:buildings   
//         gestureHanndling:"cooperative",
//         mapTypeId:"terrain",
//       });
//     // map quest
    
//       new google.maps.Marker({
//     position:{ lat: 33.7641472, lng: 72.7482368},
//     map:map,
//     label:"A",
//     title:"Mechanic",
//     Animation:google.Maps.Animation.DROP
    
//     })
//     }
// }




const ContactUs = () => {
    return (

<>
        <h1 style={{textAlign:"center"}}>Google Map Integration for Clients and Customers Connectivity</h1>
       
       
       
        <div>

        <h1 style={{textAlign: "center",justifyContent:"center",color:"#FFC300 "}}>Here is our Team for helping you</h1>
        <MapIntegration/>



    {/* <div id="map"></div> */}
    
   

    
    

    



{/* <div>
<img src={team} alt="" width="500px" height="400px"></img>           
           

</div>
         <div style={{backgroundColor:"#f6f6f4",boxShadow:"0 30px 40px rgba(0,0,0,.1);"}}>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui? Dolorum minima, odio saepe corporis impedit ad molestiae neque nemo? Quasi consectetur optio corrupti voluptates rem eos ipsa aperiam deserunt.</p>
        
            </div> */}
        </div>
    
    </>
    )

}

export default ContactUs
