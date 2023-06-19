import React from 'react'
import { useSelector } from 'react-redux'
import MobileCard from './MobileCard';
import "../Scss/mobilecard.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Mousewheel } from "swiper";
import AddMobile from './AddMobile';
import Carousell from './Carousell';
import Home from './Home';
import TitleOne from './TitleOne';
import MacList from './MacList';
import MacCard from './MacCard';
import Footer from './Footer';

function MobileList({ ping, setping, text }) {
  const mobiles = useSelector((state) => state.mobile?.mobileliste);
  console.log("mobiles",mobiles)
  return (
    <div> 
      
      {/* <div className='add'>
      <AddMobile ping={ping} setping={setping} />
      </div> */}
      <div ><TitleOne/></div>
    <div className='container-cards'>
      
      {mobiles
      // ?.filter((el) => el?.name?.toLowerCase().includes(text.toLowerCase()))
          ?.map((el,i) => 
          <MobileCard key={i} el={el} ping={ping} setping={setping} />)}
    </div>
    
    
    

    {/* <Swiper
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
      > <div className="swiper-audo">
        <SwiperSlide>
          <img src="https://i5.walmartimages.com/asr/779488a7-1edd-41a4-8c8e-aed1318063fb_1.c78d9ea73cf1bf20fa50c04515ecfbdd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" style={{width:"350px", height:"350px", margin:"0 auto", marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856" style={{width:"350px", height:"350px", margin:"0 auto" , marginTop:"10px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i5.walmartimages.com/asr/f76ac660-9f5a-495c-9af3-4bec619de77a_1.cf2fbfe5d7071433a3c80a2360a3d7f4.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF" style={{width:"350px", height:"350px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.wowcher.co.uk/images/deal/20543430/777x520/766776.jpg" style={{width:"450px", height:"350px", margin:"0 auto" , marginTop:"10px"}}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/41Uta3WYDNL._AC_SS450_.jpg" style={{width:"350px", height:"350px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0267/9501/6391/products/TWS005ee_600x.png?v=1652367594" style={{width:"350px", height:"350px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim1.flixcart.com/image/416/416/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70"style={{width:"450px", height:"350px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ebayimg.com/images/g/9e4AAOSwZlxjGcmj/s-l500.jpg" style={{width:"350px", height:"300px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.electroprecio.com/media/catalog/product/cache/1/thumbnail/481x304/9df78eab33525d08d6e5fb8d27136e95/a/r/art_jbl-aur_20tune_20215bt_20gd_1.jpg.jpg" style={{width:"350px", height:"350px", margin:"0 auto" , marginTop:"10px"}} />
        </SwiperSlide>
        </div>
      </Swiper>
      <Swiper
         slidesPerView={3}
         spaceBetween={30}
         freeMode={true}
         pagination={{
           clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide ><img src='https://images.tokopedia.net/img/cache/700/VqbcmM/2022/5/25/0527c855-b48d-49d6-9dc5-3854906b4e37.jpg.webp'/></SwiperSlide>
        <SwiperSlide><img src='https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/1/_/1_1976_1.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://electrotounes.tn/3545-large_default/tv-samsung-43-smart-full-hd-ua43n5300.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://www.vongo.tn/100243-thickbox_default/samsung-televiseur-55-curved-crystal-uhd-4k-55tu8300-garantie-2-ans.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://www.fasotech.net/wp-content/uploads/2022/06/8990bf_a8814604b164461e8fad22b1a97e9f62_mv2-1.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://www.cdiscount.com/pdt2/5/2/4/1/700x700/dyo4456398952524/rw/dyon-smart-55-x-eos-139-cm-55-pouces-smart-tv-4.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://senachat.com/public/uploads/all/tIhLWcokHpgbK9801E8jzjZVzQCUBs25bWfsSqon.png'/></SwiperSlide>
        <SwiperSlide><img src='https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw73bb5383/images/KD55X80J/KD55X80J_01.png?sw=442&sh=442&sm=fit'/></SwiperSlide>
      </Swiper> */}
      
    </div>
  )
}

export default MobileList