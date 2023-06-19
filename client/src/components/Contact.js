import React from 'react'
import "../Scss/contact.css";
import { MdCall, MdEmail,MdWhatsapp} from "react-icons/md";
import Footer from './Footer';
function Contact() {
  return (
    <div className='contact-us'>
      <div className='contact-bg'>
      <img src="https://www.nowtv.now.com/wp-content/uploads/2022/05/Contact-us-750-X-300.jpg" alt=""/>
      <h1>WE WOULD LOVE TO HELP YOU</h1>
      <p>REACH US AT:</p>
      </div>
      <div className='container-contact'>
      <div className='cards-contact' >
        <div className='header'>
          <h1> <MdCall style={{marginRight:"20px"}}/>Call us</h1>
        </div>
        <p> 
        For E-Commerce Related Queries
1800 889 1055
( 9:30 AM to 7:30 PM, 365 days )
For Store Related Queries
1800-889-1044
( 9:00 AM to 9:00 PM, 365 days )
        </p>
      </div>
      <div className='cards-contact' >
        <div className='header'>
          <h1> <MdWhatsapp style={{marginRight:"10px"}}/> Whatsapp us</h1>
        </div>
        <p> 
        We are now on WhatsApp
Send Hi! to +91 7977912345
Or <br/><br/>
  <a href="" style={{textDecoration:"none"}}>Click here to start</a>
        </p>
      </div>
      <div className='cards-contact' >
        <div className='header'>
          <h1> <MdEmail style={{marginRight:"20px"}}/>Email Us</h1>
        </div>
        <p style={{color:"#5B6EFD", cursor:"pointer"}}> 
        reliancedigital@ril.com <br/><br/>
        <a href='' style={{textDecoration:"none"}}>DOWNLOAD RESQ APP ON MOBILE</a>
        </p>
        <div className='img-contact' >
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
        <img src="https://www.nicepng.com/png/detail/25-253876_app-store-and-google-play-with-your-own.png"/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact