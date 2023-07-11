import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../css/categories.css';
import {HiArrowCircleLeft,HiArrowCircleRight } from 'react-icons/hi'
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img6 from '../images/6.png'
import Img7 from '../images/7.png'
import Img8 from '../images/8.png'
import Artist from '../images/Profile.png'
import {AiOutlineHeart} from 'react-icons/ai'


const Categories = () => {
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
      <div className='auction4'>     
        <h2 className='title2'>
        <span className="dm2" >Ex </span>
        <span className='ds2'>plore</span>
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
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img1} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img2} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img3} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img6} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img7} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
        <SwiperSlide className='costumise2'>
          <div className='container'>
            <img src={Img8} alt="image1" className='image' />
            <div className="middle">
              <button className="text">Place a bid</button>
            </div>
          </div>
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
        </SwiperSlide>
      </Swiper>
      <div className='more'>
        <button className='explore'>View All</button>
      </div>
    </div>
  );
};

export default Categories;