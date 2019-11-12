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
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Modal,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

// core components

function SectionLogin() {
    const [modal1, setModal1] = React.useState(false);
    const toggleModal1 = () => {
      setModal1(!modal1);
    };
    const [modal2, setModal2] = React.useState(false);
    const toggleModal2 = () => {
      setModal2(!modal2);
    };
    const [modal3, setModal3] = React.useState(false);
    const toggleModal3 = () => {
      setModal3(!modal3);
    };
  return (
    <>
      <a name="zombiesprint"></a><div
        className="section section-image section-login my-auto"
        style={{
			backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")", 
        
		}}
      >
		<Container>
		  <Row>
              <h2 className="title mx-auto">I BUILD IMMERSIVE AR</h2>
		</Row>
		<Row>
		<Col className="mx-auto" md="8">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3F6c1bOGXa0?controls=1&autoplay=1&loop=1&playlist=3F6c1bOGXa0&fs=0&iv_load_policy=3&modestbranding=1&disablekb=1&origin=https://kamarmack.com&start=1&mute=1&showinfo=1&autohide=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{width:"100%"}}></iframe>
              
		</Col>
		</Row>
		<Row>
			  <h5 className="title mx-auto text-center" >Zombie Sprint Vol. 1 is my first full-length Augmented Reality video game for iOS and Android devices. I have had an incredible time taking this video game from an idea in my notebook to a product on the App Store and Google Play. Enjoy!</h5>
		</Row>
		<Row>
        <Col className="mx-auto" md="8">
		<Row>
		<Col md="4" align="center">
          {/* Button trigger modal */}
          <Button
            className="btn-round"
            color="success"
            outline
            type="button"
            onClick={toggleModal1}
          >
            Learn The Story
          </Button>
          {/* Modal */}
          <Modal isOpen={modal1} toggle={toggleModal1}>
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={toggleModal1}
              >
                <span aria-hidden={true}>×</span>
              </button>
              <h5
                className="modal-title text-center"
                id="exampleModalLabel"
              >
                A Lawless Time
              </h5>
            </div>
            <div className="modal-body">
▶ Background<br/>

Medical breakthroughs in human genome sequencing have finally made possible what we all knew to be inevitable: mass-cloning of real people for warfare. Over the past 25 years, each World power poured funding into classified cloning projects creating a high-stakes arms race to amass the largest arsenal of lethal clones.<br/>

▶ A Global Epidemic<br/>

Heparin-induced thrombocytopenia (HIT) is a complication of heparin therapy. There are two types of HIT. Type 1 HIT presents within the first 2 days after exposure to heparin, and the platelet count normalizes with continued heparin therapy. Type 2 HIT is an immune-mediated disorder that typically occurs 4-10 days after exposure to heparin and has life- and limb-threatening thrombotic complications. Sadly, none of us was prepared for droves of clone soldiers to contract the new strand: HIT Z.<br/>

▶ Survival<br/>

In less than three hours, the HIT Z virus infected Patient 0, morphing him into a contagious, ravenous zombie. And now the virus has spread worldwide. Zombie Sprint tests your mobile gaming reflexes and skill with weaponry as you lead the fight against vicious waves of zombies. Only you have the power to save civilians from the terrible fate of the HIT Z virus.<br/>
            </div>
            <div className="modal-footer">
              <div>
                <Button
                  className="btn-link"
                  color="default"
                  type="button"
                  onClick={toggleModal1}
                >
                  Close
                </Button>
              </div>
            </div>
          </Modal>
        </Col>
		        <Col md="4" align="center">
		          {/* Button trigger modal */}
		          <Button
		            className="btn-round"
		            color="warning"
		            outline
		            type="button"
		            onClick={toggleModal2}
		          >
		            Privacy Policy
		          </Button>
		          {/* Modal */}
		          <Modal isOpen={modal2} toggle={toggleModal2}>
		            <div className="modal-header">
		              <button
		                aria-label="Close"
		                className="close"
		                type="button"
		                onClick={toggleModal2}
		              >
		                <span aria-hidden={true}>×</span>
		              </button>
		              <h5
		                className="modal-title text-center"
		                id="exampleModalLabel"
		              >
		                Privacy Policy
		              </h5>
		            </div>
		            <div className="modal-body">
						Kamar Mack built the Zombie Sprint app as a Free app. This SERVICE is provided by Kamar Mack at no cost and is intended for use as is.<br/><br/>

						This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.<br/><br/>

						If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.<br/><br/>

						The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Zombie Sprint unless otherwise defined in this Privacy Policy.<br/><br/>

						<em>Information Collection and Use</em><br/><br/>

						For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Ad Profile. The information that I request will be retained on your device and is not collected by me in any way.<br/>

						The app does use third party services that may collect information used to identify you.<br/>

						Link to privacy policy of third party service providers used by the app<br/><br/>

						Google Play Services<br/>
						Unity<br/>
						Log Data<br/><br/>

						I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.<br/><br/>

						<em>Cookies</em><br/><br/>

						Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&#39;s internal memory.<br/>

						This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.<br/><br/>

						<em>Service Providers</em><br/><br/>

						I may employ third-party companies and individuals due to the following reasons:<br/><br/>

						To facilitate our Service;<br/>
						To provide the Service on our behalf;<br/>
						To perform Service-related services; or<br/>
						To assist us in analyzing how our Service is used.<br/>
						I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.<br/><br/>

						<em>Security</em><br/><br/>

						I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.<br/><br/>

						<em>Links to Other Sites</em><br/><br/>

						This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.<br/><br/>

						<em>Children’s Privacy</em><br/><br/>

						These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.<br/><br/>

						<em>Changes to This Privacy Policy</em><br/><br/>

						I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.<br/><br/>

						<em>Contact Me</em><br/><br/>

						If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at Kamarmack112@gmail.com.<br/><br/>

						This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator<br/>
		            </div>
		            <div className="modal-footer">
		              <div>
		                <Button
		                  className="btn-link"
		                  color="default"
		                  type="button"
		                  onClick={toggleModal2}
		                >
		                  Close
		                </Button>
		              </div>
		            </div>
		          </Modal>
		        </Col>
			        <Col md="4" align="center">
			          {/* Button trigger modal */}
			          <Button
			            className="btn-round"
			            color="info"
			            outline
			            type="button"
			            onClick={toggleModal3}
			          >
			            Support & Terms
			          </Button>
			          {/* Modal */}
			          <Modal isOpen={modal3} toggle={toggleModal3}>
			            <div className="modal-header">
			              <button
			                aria-label="Close"
			                className="close"
			                type="button"
			                onClick={toggleModal3}
			              >
			                <span aria-hidden={true}>×</span>
			              </button>
			              <h5
			                className="modal-title text-center"
			                id="exampleModalLabel"
			              >
			                Support & Terms
			              </h5>
			            </div>
			            <div className="modal-body">
							Welcome to Zombie Sprint Vol. 1!
							<br/><br/>
							ZS1 is an Augmented Reality endless-shooter, and your objective is simple: to survive as many waves of ravenous zombies as possible.
							<br/><br/>
							<em>The information on the homescreen is as follows</em>
							<br/><br/>
							Your Rank – ranging from New Recruit all the way up to Master Prestige<br/>
							Your VC (virtual currency) balance<br/>
							The highest wave you have ever reached in a single game<br/>
							Your streak – how many consecutive days that you have played.<br/>
							*Pro tip* Your streak is factored into your score each game
							<br/><br/>
							The actual game begins by tapping the home screen, at which point you have access to the HUD (heads up display).
							<br/><br/>
							<em>The controls are as follows</em>
							<br/><br/>
							Tap anywhere on the screen to fire<br/>
							Tap the Switch button to change weapons<br/>
							Tap the Reload button to reload (Energy blaster only)<br/>
							Tap the Equipment button to accept health boosts from the Arcade<br/>
							Tap the Record button to begin a screen recording<br/>
							Tap the Pause button to take a quick break
							<br/><br/>
							Once you have taken too much damage from the zombies, the game concludes and you earn VC.
							<br/><br/>
							<em>Terms of Use:</em>
							<br/><br/>
							Zombie Sprint is an exciting, immersive experience. By playing Zombie Sprint, you agree to the following terms:<br/>
							You will NOT play near a street with cars<br/>
							You will ALWAYS play in a safe indoor or outdoor location<br/>
							You will ALWAYS watch your surroundings while playing the game.
							<br/><br/>
							<em>Thank you</em>
							<br/><br/>
							I hope that you enjoy this video game half as much as I enjoyed making it for you, because I had a ball. Only real games are going to last– all that other BS is here today and gone tomorrow...
			            </div>
			            <div className="modal-footer">
			              <div >
			                <Button
			                  className="btn-link"
			                  color="default"
			                  type="button"
			                  onClick={toggleModal3}
			                >
			                  Close
			                </Button>
			              </div>
			            </div>
			          </Modal>
			        </Col>
 				</Row>
 		     </Col>
		  </Row>
		</Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
