import React, { useState } from "react";
import { Menu,Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import {RiMenuLine} from 'react-icons/ri'
import '../css/explore.css'
import {HiMiniWallet} from 'react-icons/hi2'

const Burgermenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="menuicon" onClick={() => setIsOpen(!isOpen)} ><RiMenuLine className="menuon"/></div>
    <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
      <Item itemKey={'manage'} text={'Exlpore'}></Item>
      <Item itemKey={'user'} text={'Creators'}></Item>
      <Item itemKey={'community'} text={'Community'}></Item>
      <Item text={<span><div className="wallet"  ><i><HiMiniWallet style={{width:'25px', height:'25px', marginRight:'10px'}} /></i> Wallet</div> </span>}></Item>
    </Menu>
  </>
  )
}

export default Burgermenu