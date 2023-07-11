import React from 'react'
import "../css/info.css"
import Line from '../images/line.svg'
import {IoWalletOutline} from 'react-icons/io5'
import {MdOutlineCollectionsBookmark} from 'react-icons/md'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import {AiFillSignal} from 'react-icons/ai'
const Info = () => {
  return (
    <div className='h-work' >
      <h2>How it works</h2>
      <div className="offers ">
        <div className='df'>
          <div className="offer">
            <IoWalletOutline className='of-itm'/>
          </div>
          <img src={Line} alt="line" />
        </div>
        <div className='df'>
          <div className="offer">
            <MdOutlineCollectionsBookmark className='of-itm'/>
          </div>
          <img src={Line} alt="line" />
        </div>        
        <div className='df'>
          <div className="offer">
            <HiOutlineViewGridAdd className='of-itm'/>
          </div>
          <img src={Line} alt="line" />
        </div>
        <div className='df'>
          <div className="offer">
            <AiFillSignal className='of-itm'/>
          </div>
          <img src={Line} alt="line" className='extra4'  />
        </div>
      </div>
    </div>
  )
}

export default Info