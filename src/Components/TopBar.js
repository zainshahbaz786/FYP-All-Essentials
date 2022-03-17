import React from "react";
import logo from "./images/logoo.png";
import {NavLink,Link} from 'react-router-dom';

import {BrowserRouter as Router,Switch} from 'react-router-dom' 
// import WhyPage from "./WhyPage";
export const TopBar = () => {
  return (
    <div className="topbar_wrapper">
      <div>
        
        
        <a href="/">
          
        <img src={logo} alt="" style={{ width: "90px",height:"90px" }}></img>
        </a>
        
        
      </div>


      

      {/* <Switch>
      <Router> */}


      <div className="topBar_right">


        <Link to="/WhyPage"><h3>Why Us</h3></Link>
        <Link to="/WorkWithUs"><h3>Work With Us</h3></Link>
        <Link to="/ContactUs"><h3>Contact Us</h3></Link>
        <Link to="/AboutOurServ"><h3>About Our Services</h3></Link>

      </div>


{/* <Route exact path="/" component={TopBar}> </Route> */}

{/* <Route  path="/ContactUs">  <WhyPage/>  </Route>
<Route  path="/WorkWithUs">  <TopBar/>  </Route> */}



      {/* </Router>
      </Switch> */}
    </div>
  );
};
