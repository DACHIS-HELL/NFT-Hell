import React from 'react'
import "../css/header.css"
import Logo from'../images/logo.png'
import Burgermenu from './Burgermenu'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='navigate'>
        <nav>
          <ul>
            <li>
              Explore
            </li>
            <li>
              Creators
            </li>
            <li>
              Community
            </li>
          </ul>
        </nav>
        <button>Connect Wallet</button>
      </div>
      <Burgermenu/>
    </header>
  )
}

export default Header