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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button,Container } from "reactstrap";

// core components

function IndexHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
      if (window.innerWidth < 991) {
        const updateScroll = () => {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    });
  return (
    <>
      <div
      className="page-header"
      data-parallax={true}
      ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/hero.jpg") + ")"
        }}
      >
        <div className="filter" />
        
          <Container>
            <div className="motto text-center">
		      <h2 style={{fontWeight:"bold"}}>ZOMBIE SPRINT</h2>
		      <h4 style={{fontWeight:""}}>WANT TO PLAY?</h4>
		      <br />
		      <Button
		        href="https://apps.apple.com/us/app/zombie-sprint-vol-1/id1484403625"
		        className="btn-round mr-1"
		        color="success"
		        target="_blank"
		        outline
		      >
		        <i className="fa fa-apple" />DOWNLOAD FOR FREE
		      </Button>
		      <Button 
				href="https://forms.gle/SWXDSdyDku4wLtWa9"
				className="btn-round mr-1" 
				color="info" 
				target="_blank"
				outline>
		        <i className="fa fa-android" />GOOGLE PLAY WAITLIST
		      </Button>
		    </div>
          </Container>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        
      </div>
    </>
  );
}

export default IndexHeader;
