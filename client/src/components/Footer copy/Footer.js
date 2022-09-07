import React,{useState} from "react";
import footerLogo from "../../assets/Footer/footerLogo.png";
import Email from "../../assets/Footer/email.png";
import Phone from "../../assets/Footer/phone.png";
import whatsapp from "../../assets/Footer/whatsapp.png";
import instagram from "../../assets/Footer/instagram.png";
import facebook from "../../assets/Footer/facebook.png";
import linkedin from "../../assets/Footer/linkedin.png";
import stripe from "../../assets/Footer/stripe.png";
import paypal from "../../assets/Footer/paypal.png";
import razorpay from "../../assets/Footer/razorpay.png";
import hr from "../../assets/Footer/hr.png";
import line from "../../assets/Footer/line.svg";
import "./Footer.css";

const Footer = () => {
  // var year = new Date().getFullYear();
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);  

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={footerLogo} className="footer-img" alt="" />
          <p className="footer-about-desc">
            Assignment Writing Service is deeply committed to making sure that
            we make a difference in the world. We guarantee that your
            assignments will not be stressful and that you will get excellent
            grades as a result. All of our products and services are of the
            utmost quality and efficiency for your reference.
          </p>
        </div>

        {
          windowWidth <=500 ? 
          ( 
            //Mobile size footer
            <>
            <div className="links-container">

            <div className="links-first-container">
            <div className="Register_a">
             <div className="footer-heading1">
                <img src={line} alt="" className="footer-line" />
                <h2>Quick Links</h2>
              </div>
              <ul>
                <li><a href="/">Order Now</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/">Writers</a></li>
                <li><a href="/">Writing Tools</a></li>
                <li><a href="/">Reviews</a></li>
              </ul>
             </div>

              <div className="Register_a support">
                <div className="footer-heading2">
                  <img src={line} alt="" className="footer-line" />
                  <h2>Supports</h2>
                </div>
                <ul>
                  <li><a href="/faq">FAQs</a></li>
                  <li><a href="/">Policies</a></li>
                  <li><a href="/">Terms & Conditions</a></li>
                </ul>
              </div>

            </div>

             <div className="links-second-container">
             <div className="Register_a">
              <div className="footer-heading">
                <img src={line} alt="" className="footer-line" />
                <h2>Services</h2>
              </div>
              <ul>
                <li><a href="/assignmentwritingpage">Assignment Writing</a></li>
                <li><a href="/essay">Essay Writing</a></li>
                <li><a href="/dissertation">Dessertation</a></li>
                <li><a href="/research">Research Paper</a></li>
                <li><a href="/casestudy">Case Study</a></li>
                <li><a href="/code">Coding</a></li>
                <li><a href="/homework">Homework Writing</a></li>
                
              </ul>
            </div>

              <div className="Register_a1">
                <div className="footer-heading3">
                  <img src={line} alt="" className="footer-line" />
                  <h2>Get In Touch</h2>
                </div>
                <ul>
                  <li><a href="/"><img src={Email} className="icon" alt="email" /> Email Us</a></li>
                  <li><a href="/"><img src={Phone} className="icon" alt="email" /> Call Us</a></li>
                </ul>

                <div className="socials">
                  <a href="https://whatsapp.com"><img src={whatsapp} className="social-icon" alt="whatsapp" /></a>
                  <a href="https://facebook.com"><img src={facebook} className="social-icon" alt="whatsapp" /></a>
                  <a href="https://instagram.com"><img src={instagram} className="social-icon" alt="whatsapp" /></a>
                  <a href="https://linkedin.com"><img src={linkedin} className="social-icon" alt="whatsapp" /></a>
                </div>
                
              </div>
             </div>

             </div>

             <img src={hr} className="footer-hr" alt="hr" /> 
             <div className="payment">
                <h2 className="payment-heading">Payment Partners</h2>
                <div className="payment-partner">
                  <img src={stripe} alt="" className="paymnet-partner-img" />
                  <img src={paypal} alt="" className="paymnet-partner-img" />
                  <img src={razorpay} alt="" className="paymnet-partner-img" />
                </div>
             </div>  
            </>
          ) :
          ( 
            // Normal Footer
            <>
            <div className="Register_a">
              <div className="footer-heading">
                <img src={line} alt="" className="footer-line" />
                <h2>Quick Links</h2>
              </div>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/">Order Now</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/">Writers</a></li>
                <li><a href="/">Writing Tools</a></li>
                <li><a href="/">Reviews</a></li>
              </ul>
            </div>

            <div className="Register_a">
              <div className="footer-heading">
                <img src={line} alt="" className="footer-line" />
                <h2>Services</h2>
              </div>
              <ul>
              <li><a href="/assignmentwritingpage">Assignment Writing</a></li>
                <li><a href="/essay">Essay Writing</a></li>
                <li><a href="/dissertation">Dessertation</a></li>
                <li><a href="/research">Research Paper</a></li>
                <li><a href="/casestudy">Case Study</a></li>
                <li><a href="/code">Coding</a></li>
                <li><a href="/homework">Homework Writing</a></li>
              </ul>
            </div>
 
            <div className="Register_a">
              <div className="footer-heading">
                <img src={line} alt="" className="footer-line" />
                <h2>Supports</h2>
              </div>
              <ul>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/policy">Policies</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>

        <div className="Register_a">
          <div className="footer-heading">
            <img src={line} alt="" className="footer-line" />
            <h2>Get In Touch</h2>
          </div>
          <ul>
            <li><a href="/"><img src={Email} className="icon" alt="email" /> Email Us</a></li>
            <li><a href="/"><img src={Phone} className="icon" alt="email" /> Call Us</a></li>
          </ul>

          <div className="socials">
            <a href="https://whatsapp.com"><img src={whatsapp} className="social-icon" alt="whatsapp" /></a>
            <a href="https://facebook.com"><img src={facebook} className="social-icon" alt="whatsapp" /></a>
            <a href="https://instagram.com"><img src={instagram} className="social-icon" alt="whatsapp" /></a>
            <a href="https://linkedin.com"><img src={linkedin} className="social-icon" alt="whatsapp" /></a>
          </div>
          <div className="payment">
            <h2 className="payment-heading">Payment Partners</h2>
            <div className="payment-partner">
              <img src={stripe} alt="" className="paymnet-partner-img" />
              <img src={paypal} alt="" className="paymnet-partner-img" />
              <img src={razorpay} alt="" className="paymnet-partner-img" />
            </div>
          </div>
        </div>
            </>  
          )
        }

      </div>

      {
        windowWidth<=500? (
          <>

          <div className="footer_info">
            <div className="footer-box">
              <p>
                Copyright &#169;
                {/* <em> {year} </em> */}
                <a href="https://www.assignmentwritingservices.com/"> Assignment Writing Services. </a>
                All Rights Reserved
              </p>
            </div>
          </div>
            <img src={hr} alt="hr" className="footer-hr1" />
          </>
        ): 
        (
          <div className="footer_info">
            <hr className="hr" />

            <div className="footer-box">
              <p>
                Copyright &#169;
                {/* <em> {year} </em> */}
                <a href="https://www.assignmentwritingservices.com/"> Assignment Writing Services. </a>
                All Rights Reserved
              </p>
            </div>
          </div>
        )
      }  
      
    </div>
  );
};

export default Footer;