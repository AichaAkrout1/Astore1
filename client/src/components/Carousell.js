import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



import "../Scss/carousel.css"

function Carousell() {
  return (
    <div className='box'>
      <Carousel fade style={{marginLeft:"-80px", marginTop:'50px', width:"1900px"}}>
      <Carousel.Item>
      <img
           style={{display:"block", marginLeft:"70px", marginRight:"auto",width:"1500px", marginTop:"20px" }}
          src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss1_copy_1512x.jpg?v=1643782619"
          alt=""
        />
        <Carousel.Caption className='content-car fadeInUp-animation' >
          <div style={{marginTop:"-500px"}}>
        <p style={{fontWeight:"400"}}>All new 13-inch & 15-inch</p>
        <h1 style={{fontWeight:"600", fontSize:"70px"}}>MacBook with retina display</h1>
        <button style={{background:"#333333", color:"white", borderColor: "#333333",height:"48px", width:"150px", marginTop:"20px"}}>SHOP NOW</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           style={{display:"block", marginLeft:"70px", marginRight:"auto",width:"1500px" , marginTop:"20px"  }}
           src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss2_copy_1512x.jpg?v=1643782958"
          alt=""
        />

        <Carousel.Caption className='content-car fadeInUp-animation' >
          <div style={{marginTop:"-500px"}}>
        <p style={{fontWeight:"400"}}>Apple Watch Series 7</p>
        <h1 style={{fontWeight:"600" , fontSize:"70px"}}>Future of health is on your wrist</h1>
        <button style={{background:"#333333", color:"white", borderColor: "#333333",height:"48px", width:"150px", marginTop:"20px"}}>SHOP NOW</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           style={{display:"block", marginLeft:"70px", marginRight:"auto", width:"1500px" , marginTop:"20px"  }}
           src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss3_copy_1512x.jpg?v=1643782988"
          alt=""
        />
        <Carousel.Caption className='content-car fadeInUp-animation' >
          <div style={{marginTop:"-470px"}}>
        <p style={{fontWeight:"400"}}>Your New Superpower</p>
        <h1 style={{fontWeight:"600", fontSize:"70px"}}>Iphone 13 Series in Astor</h1>
        
        <button style={{background:"#333333", color:"white", borderColor: "#333333",height:"48px", width:"150px", marginTop:"20px"}}>SHOP NOW</button>
    
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
    </div>
  )
}

export default Carousell