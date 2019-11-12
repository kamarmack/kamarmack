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
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section" style={{marginTop:'0px', paddingTop:'0px',marginBottom:'1em', paddingBottom:'1em'}}>
        <Container>
          <Row >
            <Col md="12" >
              <div className="title">
                <h2 style={{textAlign:'center'}}>About Me</h2>
              </div>
	  		</Col>
	  		</Row>
	  		<Row>
	  		<Col className="ml-auto mr-auto" md="10" >
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs style={{fontSize:"small"}}>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Background
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Vision for 2030
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Fun Facts
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>I am a software developer from Memphis, TN with a passion for playing and developing video games. My interest in creating my own video games began on my 16th birthday: the day that Rockstar Games released GTA V. The graphics and seemingly endless gameplay were incredible, not to mention the franchise has generated over $6 billion dollars. I am dedicated to making contributions to the next frontier of game development – immersive AR/VR.</p>
                </TabPane>
                <TabPane tabId="2">
                  <p>The coming decade has much promise. My vision for 2030 is a society fueled by clean energy, educated by personalized, affordable institutions, powered by balanced AI systems, and focused on maximizing global collaboration. I remain optimistic in our ability to realize this vision and am committed to doing my part. I&#39;m curious– what is your vision for 2030?</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>I know the math behind the boardgame Candy Land<br/>I can tie 6 different types of neck-tie/bow-tie knots<br/>I only drink black coffee.<br/>I&#39;ve gone scuba diving in the Philippines</p>
                </TabPane>
              </TabContent>
            </Col>
            
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
