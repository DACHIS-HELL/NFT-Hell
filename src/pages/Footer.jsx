import React from 'react'
import "../css/footer.css"
import Nft from '../images/nft.png'
import {SiYoutube , SiTwitter , SiFacebook , SiInstagram} from 'react-icons/si'

const Footer = () => {
  return (
      <footer>
        <img src={Nft} alt="" />
        <article className='social'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Necessitatibus, dolore.Necessitati, dolore.
          </p>
          <div className="networks">
              <SiYoutube style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiTwitter style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiFacebook style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiInstagram style={{color:'#FCA311', width:'25px',height:'25px'}}/>
          </div>
          <summary>All rights reserved@2023</summary>
        </article>
        <div className="about">
          <h5>About Us</h5>
          <p>About NFTs</p>
          <p>Live Auction</p>
          <p>NFT Blog</p>
          <p>Activity</p>
          <p>Nothing is real</p>
        </div>
        <div className="about">
          <h5>Support</h5>
          <p>Help & Support</p>
          <p>Item Details</p>
          <p>Author Profile</p>
          <p>Collection</p>
          <p>Nothing is real</p>
        </div>
        <article className='social2'>
          <div className="networks">
              <SiYoutube style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiTwitter style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiFacebook style={{color:'#FCA311', width:'25px',height:'25px'}}/>
              <SiInstagram style={{color:'#FCA311', width:'25px',height:'25px'}}/>
          </div>
          <summary>All rights reserved@2023</summary>
        </article>
      </footer>
  )
}

export default Footer