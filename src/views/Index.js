/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionLogin from "views/index-sections/SectionLogin.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
	  <style>
	  @import url('https://fonts.googleapis.com/css?family=Cabin:600&display=swap');
	  
	  </style>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        
      <SectionProgress />
	  <SectionLogin />
	  <SectionCarousel />
	  <DemoFooter/>
      </div>
    </>
  );
}

export default Index;
