import React from 'react'
import ReactPlayer from 'react-player'
import "../Scss/about.css"
import "swiper/css";
import { useNavigate } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Footer from './Footer';




function About() {
  const navigate = useNavigate();

  return (
<div>

      <div className='player-video'>
     <ReactPlayer url='https://youtu.be/drhGk3LHeNw' 
     controls
     playing
     muted
     width="100%"
     height="850px"

    />
    </div>
    <div className='container-about' style={{background:"#F0F2F5", boxShadow: "0px 10px 5px 0px rgba(0,0,0,0.75)"}}>

      <div className='information-about'style={{width:"1500px"}} >
        <div className='info-about'>
          <h1 >ADDRESS</h1>
          <h6>Shop 009A, Level 4, Block A,Demo Park, Ottawa</h6>
        </div>
        <div className='info-about'>
          <h1>PHONE</h1>
          <h6>Mobile: +1-613-555-0182</h6>
        </div>
        <div className='info-about'>
          <h1>EMAIL</h1>
          <h6>contact@apleestore.com</h6>
        </div>
      </div>
      <div className='information-about'>
      <h6 style={{marginTop:"70px"}}>aplee always follow 3 things “authentic apple products”, “fast delivery” & “best service” in these cases, we never consider and never failed which has driven to the fastest growing e-commerce and top trusted reseller with customer satisfaction in terms of product authenticity and best after sell service.</h6>
     <button style={{background:"#333", width:"150px", height:"50px", textDecorationLine:"none", color:"#fff", fontWeight:"600", marginTop:"30px"}} onClick={() => navigate("/")} >  ONLINE STORE</button>
    </div>

    </div>
    <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
        style={{marginTop:"50px"}}> 
      
      <div className="swiper-audo">
       
        <SwiperSlide>
          
          <p style={{marginLeft:"100px", width:"380px", fontFamily:"cursive", color:"#ABAFB1", fontSize:"20px", fontStyle:"normal", fontWeight:"400"}}>There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.
              </p>
        <div  style={{display:"flex"}}>
          <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/1_95f48c16-f212-484b-ae45-8ced5e7abf8d.png?v=1613680445" style={{width:"70px", height:"70px", marginLeft:"100px", marginTop:"10px"}} />
          <p style={{marginTop:"25px", marginLeft:"10px", color:"black", fontFamily:"fantasy", fontSize:"15px"}}>Bradley pink </p>
        </div>
        <p style={{marginTop:"-30px", marginLeft:"180px", color:"#ABAFB1", fontFamily:"monospace"}}>/ CEO </p>
        </SwiperSlide>
        <SwiperSlide>
        <p style={{marginLeft:"100px", width:"380px", fontFamily:"cursive", color:"#ABAFB1", fontSize:"20px", fontStyle:"normal", fontWeight:"400"}}>There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.
              </p>
        <div  style={{display:"flex"}}>
          <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/3_9e669119-84ba-41f7-8a6c-7756a36921c6.png?v=1613680445" style={{width:"70px", height:"70px", marginLeft:"100px" , marginTop:"5px"}}/>
          <p style={{marginTop:"25px", marginLeft:"10px", color:"black", fontFamily:"fantasy", fontSize:"15px"}}>Desily jenim </p>
        </div>
        <p style={{marginTop:"-30px", marginLeft:"180px", color:"#ABAFB1", fontFamily:"monospace"}}>/ Founder </p>
        </SwiperSlide>
        <SwiperSlide>
        <p style={{marginLeft:"100px", width:"380px", fontFamily:"cursive", color:"#ABAFB1", fontSize:"20px", fontStyle:"normal", fontWeight:"400"}}>There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.
              </p>
              <div  style={{display:"flex"}}>
          <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/2_4b869bdd-0223-45ea-b69c-ba79f16766ab.png?v=1613680445" style={{width:"70px", height:"70px", marginLeft:"100px" , marginTop:"10px"}} />
          <p style={{marginTop:"25px", marginLeft:"10px", color:"black", fontFamily:"fantasy", fontSize:"15px"}}>Willie Bradley </p>
        </div>
        <p style={{marginTop:"-30px", marginLeft:"180px", color:"#ABAFB1", fontFamily:"monospace"}}>/ Reporter </p>
        </SwiperSlide>
        <SwiperSlide>
        <p style={{marginLeft:"100px", width:"380px", fontFamily:"cursive", color:"#ABAFB1", fontSize:"20px", fontStyle:"normal", fontWeight:"400"}}>There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.
              </p>
              <div  style={{display:"flex"}}>
          <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/3_9e669119-84ba-41f7-8a6c-7756a36921c6.png?v=1613680445" style={{width:"70px", height:"70px", marginLeft:"100px" , marginTop:"10px"}}  />
          <p style={{marginTop:"25px", marginLeft:"10px", color:"black", fontFamily:"fantasy", fontSize:"15px"}}>Bradley pink </p>
        </div>
        <p style={{marginTop:"-30px", marginLeft:"180px", color:"#ABAFB1", fontFamily:"monospace"}}>/ CEO </p>
        </SwiperSlide>
        </div>
      </Swiper>
      <Footer/>
    </div>

  )
}

export default About