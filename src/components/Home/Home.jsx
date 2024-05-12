import React from "react";
import Navbar from "./Navbar";
import arrow from "../../assets/images/icon-arrow-down.svg"
// import headerImage from "../../assets/images/desktop/image-header.jpg"
import "../css/Home.css"

function Home() {
 return(
 <>
 <div className="home-container">
<Navbar/>
<div className="home-intro">
<h1>WE ARE CREATIVES</h1>
<img src={arrow} alt="icon-arrow-down"/>
</div>

 </div>
 </>
 )
}
export default Home;