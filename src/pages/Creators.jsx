import React from 'react'
import "../css/creators.css"
import User1 from '../images/artist.svg'
import User2 from '../images/artist2.svg'
import User3 from '../images/artist3.svg'
import User4 from '../images/artist4.svg'


const Creators = () => {
  return (
    <div className='creators' >
      <div className='auction'>     
        <h2 className='title'>
        <span className="dm3">To</span>
        <span className="ds3">p Creators</span>
        </h2>
      </div>
      <div className='people'>
        <div className='articles3'>
          <article>
            <img src={User1} alt="" />
            <div>
              <h6>Wzard Dee</h6>
              <p>4.89 ETH</p>
            </div>
            <span className='cost2'>
              <h6>33</h6>
              <p>Items</p>
            </span>
          </article>
          <article>
            <img src={User2} alt="" />
            <div>
              <h6>Wzard Dee</h6>
              <p>4.89 ETH</p>
            </div>
            <span className='cost2'>
              <h6>33</h6>
              <p>Items</p>
            </span>
          </article>
        </div>
        <div className='articles3'>
          <article>
            <img src={User3} alt="" />
            <div>
              <h6>Wzard Dee</h6>
              <p>4.89 ETH</p>
            </div>
            <span className='cost2'>
              <h6>33</h6>
              <p>Items</p>
            </span>
          </article>
          <article>
            <img src={User4} alt="" />
            <div>
              <h6>Wzard Dee</h6>
              <p>4.89 ETH</p>
            </div>
            <span className='cost2'>
              <h6>33</h6>
              <p>Items</p>
            </span>
          </article>
        </div>
      </div>
      <div className='more'>
        <button className='explore'>View All</button>
      </div>
    </div>
  )
}

export default Creators