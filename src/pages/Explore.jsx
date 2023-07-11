import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import "../css/explore.css";
import Monkey from '../images/monkey.svg';
import Artist from '../images/artist.svg';

const Explore = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxArtworks = 32; // Maximum value for Artworks
  const maxAuctions = 20; // Maximum value for Auctions
  const maxCreators = 12; // Maximum value for Creators

  const getDisplayedNumber = (value, max) => {
    const displayedValue = Math.min(Math.floor(value / 2), max);
    return displayedValue;
  };

  const displayedArtworks = getDisplayedNumber(scrollPosition, maxArtworks);
  const displayedAuctions = getDisplayedNumber(scrollPosition, maxAuctions);
  const displayedCreators = getDisplayedNumber(scrollPosition, maxCreators);

  return (
    <section className='sect1'>
      <div className='cnt'>
         <h1>
             Explore, Buy and Sell the <span>Best NFTs!</span>
         </h1>
         <div className='clicks'>
          <button className='explore'>Explore</button>
          <button className='create'>Create</button>
         </div>
         <div className='rate'>
          <article>
            <h2>
              <CountUp end={displayedArtworks} duration={2.5} />k
            </h2>
            <p>Artworks</p>
          </article>
          <article>
            <h2>
              <CountUp end={displayedAuctions} duration={2.5} />k
            </h2>
            <p>Auctions</p>
          </article>
          <article>
            <h2>
              <CountUp end={displayedCreators} duration={2.5} />k
            </h2>
            <p>Creators</p>
          </article>
         </div>
      </div>
      <div className='sale'>
        <img src={Monkey} alt=""/>
        <div className='timeE'>
          <div className='bid'>
            <h5>Current bid</h5>
            <p>0.99 ETH</p>
          </div>
          <div className='hrs'>
            <h5>Ends in</h5>
            <p>25hrs</p>
          </div>
        </div>
        <div className="autor">
          <div className='artist'>
            <img src={Artist} alt="" />
             <article>
              <h6>Dachi</h6>
              <p>@Dachi'sHell</p>
             </article>
          </div>
          <button>Start Bid</button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
