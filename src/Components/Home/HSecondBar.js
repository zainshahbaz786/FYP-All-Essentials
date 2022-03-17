import React from "react";

export const HSecondBar = () => {
  return (
    <div className="HSecondBar" style={{display:"flex"}} >
      {/* style={{display:"flex"}} */}
      {/*     1st Div  */}
      <div className="HSecondBar_p1" style={{display:"block"}} >
        {/* style={{ backgroundColor: "pink" }} */}
        <h1 style={{fontFamily:"poppins" }}>

          <span style={{color:"#f86202" ,display:"block"}}>Skilled Professional</span> At Your Doorstep.
        </h1>
        <p>
          <b>
            All Essentials  is a leading multiple service provider company catering to
            your basic  needs with quality guaranteed.
          </b>
        </p>
        <p>
          The aim and priority of our services are to add value to our consumers'
          lives by providing smart solutions to all their problems. Our pride is
          providing the most extensive range of services. We make sure that your safety is never
          compromised. This is why we hire all the staff under the roof of All Essentials Services Provider Recruiting Team, just for your satisfaction.
        </p>
        <div className="quotebox">
          <h1 >"-Good Service is a great enhancement-"</h1><span><h4>George Herbet</h4></span>
          
          </div>

        





      </div>
      {/* 2nd Div */}
      <div  className="HSecondBar_p2" style={{ backgroundColor: "orange" }}>
        

  <div className="booking-services" >
        <h2 style={{color:"#ffa500"}}>Book your service</h2>
        <div className="form-group">


        <label for="fullname"></label>
    <input type="text" id="fname" name="Full Name" placeholder="Enter Your Full Name" style={{justifyContent:"center"}}/>
<br/>
{/* fmname will be used */}
{/* JobMobile will be used */}
{/* JobCode will be used */}
{/* JobCity1 will be used */}
{/* JobAddress will be used */}


          <input class="inputBox" id="CustomerId" name="CustomerId" type="hidden" />
          
       
          <span
            className="field-validation-valid"
            data-valmsg-for="JobName"
            data-valmsg-replace="true"
          ></span>
        </div>
        <div className="form-group" style={{paddingBottom:"0px"}}>
          <div className="xts-ph-slct-fld-outer">
            <div className="xts-ph-slct-fld-inner" style={{display:"flex"}}>
              <select
                id="JobCode"
                className="form-control"
                name="JobCode"
                tabindex="2"
                onchange="validatePhone()"  
              >
                <option selected="">03XX</option>
                <option value="0300">0300</option>
                <option value="0301">0301</option>
                <option value="0302">0302</option>
                <option value="0303">0303</option>
                <option value="0304">0304</option>
                <option value="0305">0305</option>
                <option value="0306">0306</option>
                <option value="0307">0307</option>
                <option value="0308">0308</option>
                <option value="0309">0309</option>
                <option value="0310">0310</option>
                <option value="0311">0311</option>
                <option value="0312">0312</option>
                <option value="0313">0313</option>
                <option value="0314">0314</option>
                <option value="0315">0315</option>
                <option value="0316">0316</option>
                <option value="0317">0317</option>
                <option value="0320">0320</option>
                <option value="0321">0321</option>
                <option value="0322">0322</option>
                <option value="0323">0323</option>
                <option value="0324">0324</option>
                <option value="0330">0330</option>
                <option value="0331">0331</option>
                <option value="0332">0332</option>
                <option value="0333">0333</option>
                <option value="0334">0334</option>
                <option value="0335">0335</option>
                <option value="0336">0336</option>
                <option value="0337">0337</option>
                <option value="0338">0338</option>
                <option value="0339">0339</option>
                <option value="0340">0340</option>
                <option value="0341">0341</option>
                <option value="0342">0342</option>
                <option value="0343">0343</option>
                <option value="0344">0344</option>
                <option value="0345">0345</option>
                <option value="0346">0346</option>
                <option value="0347">0347</option>
                <option value="0348">0348</option>
                <option value="0349">0349</option>
                <option value="0364">0364</option>
              </select>
              <input className="inputBox"
                name="JobMobile"
                id="JobMobile"
                data-mask="0000000"
                placeholder="0000000"
                tabindex="3"
                onkeyup="onphonekeyup(this)"
                class="form-control xts-mask xts-mobile-number"
                type="text"
                maxlength="7"
                autocomplete="off"
              />
              <input className="inputBox"
                name="JobMobileNumber"
                data-val="true"
                id="JobMobileNumber"
                class="form-control xts-mask"
                type="hidden"
                data-val-required="Mobile field is required"
              />
            </div>
            <span
              className="field-validation-valid"
              data-valmsg-for="JobMobileNumber"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
        {/* ................................................ */}
<div style={{display:"flex"}}>
        <div className="form-group" style={{paddingTop:"17px"}}>
          <select
            id="JobCity1"
            name="JobCity1"
            // style="width: 100%"
            onchange="onCityChange()"
            className="form-control"
            tabindex="4" >

            <option value="" style={{paddingBottom:"5px"}}>Select City</option>
            <option value="Karachi">Islamabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Lahore">Karachi</option>
          </select>
          <input className="inputBox"
            id="JobCity"
            name="JobCity"
            type="hidden"
            data-val="true"
            data-val-required="City field is required"
          />
          <span
            className="field-validation-valid"
            data-valmsg-for="JobCity"
            data-valmsg-replace="true"
          ></span>
        </div>
        <div className="form-group post-job-area hidden">
          <span className="k-widget k-combobox k-header" >
              <span
              tabindex="-1"
              unselectable="on"
              className="k-dropdown-wrap k-state-default"
              ><span tabindex="-1" unselectable="on" class="k-select"
                ></span
              ></span
            ></span>
          <span
            className="field-validation-valid"
            data-valmsg-for="JobArea"
            data-valmsg-replace="true"
          ></span>
        </div>

        <div className="form-group" style={{paddingTop:"15px"}}>
          <input className="inputBox"
            id="JobAddress"
            name="JobAddress"
            type="text"
            data-val="true"
            placeholder="Address"
            className="form-control"
            tabindex="4"
            
            data-val-required="Address field is required"
            autocomplete="nop"
          />
          <span
            className="field-validation-valid"
            data-valmsg-for="JobAddress"
            data-valmsg-replace="true"
          ></span>
        {/* seco */}
          

          
        </div>
        </div>
        {/* .................................. */}
        <div className="form-group" style={{paddingTop:"15px"}}>
          <button className="reqCall" type="submit" tabindex="7">
            Request a Call
          </button>
        </div>
      </div>





      </div>
    </div>
  );
};
