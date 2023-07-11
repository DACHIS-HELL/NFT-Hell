import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../css/auctions.css';
import '../css/responsive.css'
import {HiArrowCircleLeft,HiArrowCircleRight } from 'react-icons/hi'
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img6 from '../images/6.png'
import Img7 from '../images/7.png'
import Img8 from '../images/8.png'
import Artist from '../images/Profile.png'
import {AiOutlineHeart} from 'react-icons/ai'


const Slider = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="slider-container">
      <div className='auction1'>     
        <h2>
        <span className="dm">Li</span>
        <span className="ds">ve Auctions</span>
      </h2>
      </div>
      <div className="swiper-buttons">
        <button
          className="swiper-button-prev"
          onClick={goPrev}
          style={{ cursor: 'pointer' }}
        >
          <HiArrowCircleLeft style={{width:'100%',height:'100%'}}/>
        </button>
        <button
          className="swiper-button-next"
          onClick={goNext}
          style={{cursor: 'pointer' }}
        >
          <HiArrowCircleRight style={{width:'100%',height:'100%'}} />
        </button>
      </div>
      <Swiper
        style={{marginTop:'70px'}}
        spaceBetween={50}
        slidesPerView='auto'
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className='costumise'>
          <img src={Img1} alt="image1" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div>
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
        <SwiperSlide className='costumise'>
          <img src={Img2} alt="image2" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div>
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
        <SwiperSlide className='costumise'>
          <img src={Img3} alt="image3" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div> 
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
        <SwiperSlide className='costumise'>
          <img src={Img6} alt="image6" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div>
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
        <SwiperSlide className='costumise'>
          <img src={Img7} alt="image7" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div>
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
        <SwiperSlide className='costumise'>
          <img src={Img8} alt="image8" />
          <div className='autor2'>
            <img src={Artist} alt="" />
            <div className='ar-2'>
               <h4>Virtual Art</h4>
               <p>by @Dachi's hell</p>
            </div>
            <div className='df'>
              <AiOutlineHeart style={{width:'30px' , height:'30px',color:'#76607A'}}/>
              <p style={{color:'#76607A'}}>95</p>
            </div>
          </div>
          <div className='bidding df2'>
            <span>Current Bid</span>
            <p>4.99ETH</p>
          </div>
          <button className='bid2'>Place a bid</button>
        </SwiperSlide>
      </Swiper>
      <div className='more'>
        <button className='explore'>Show more</button>
      </div>
    </div>
  );
};

export default Slider;
