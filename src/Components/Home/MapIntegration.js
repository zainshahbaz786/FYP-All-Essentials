import React from 'react'  
import mapImage from './maps.png';
// import {GoogleApiWrapper} from 'google-maps-react';
// import {Map, InfoWindow, Marker} from 'google-maps-react';
const MapIntegration = () => {
    return (
        <>

            <img src={mapImage} style={{height:"400px",width:"700px",display:"block",marginLeft:"auto",marginRight:"auto"}} alt=""></img>
        </>
    )
}

export default MapIntegration