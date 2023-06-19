import React from 'react'
import "../Scss/home.css";
import MobileList from './MobileList';
import Carousell from './Carousell';
import Footer from './Footer';
import MacList from './MacList';

function Home({ping, setping, text}) {
  return (
    <div>
        <Carousell/>
      
   
       <div className='box-cards' style={{marginLeft:"99px", marginRight:"90px"}}>
        <div className='contenair-cards'>
            <div className='cards-home'>
                <div className='image-card' >
                    <img  src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/b2_540x.jpg?v=1643520859" alt=""/>
                </div>
                <div className='content-card'>
                    <h1>Smart  <br/> Watches</h1>
                    <h5>from $45</h5>
                </div>

            </div>
            <div className='cards-home'>
                <div className='image-card'>
                    <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/b1_540x.jpg?v=1643522570" alt=""/>
                </div>
                <div className='content-card'>
                    <h1>Ipad &  <br/> Ipad Air</h1>
                    <h5>from $99</h5>
                </div>

            </div>
            <div className='cards-home'>
                <div className='image-card'>
                    <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/b1_540x.png?v=1643522992" alt=""/>
                </div>
                <div className='content-card'>
                    <h1>TV & <br/> Video</h1>
                    <h5>from $45</h5>
                </div>

            </div>

        </div>

       </div> 
       <MobileList text = {text} ping={ping} setping={setping} />
       <MacList text = {text} ping={ping} setping={setping} />
       <div style={{marginTop:"40px"}}>
      <img style={{width:"100%", height:"auto", objectFit:"cover", objectPosition: "80% 100%"}} src="https://images.macrumors.com/article-new/2021/11/Target-November-Deals-2.jpg" alt=""/>
    </div>

       <Footer/>
       </div>
  )
}

export default Home