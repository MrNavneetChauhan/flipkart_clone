import React from 'react'
import { useStyle } from './navbarStyle'
import {NavbarData} from "../../Data/NavbarData"
import {BiChevronDown} from "react-icons/bi";

export const Navbar = () => {
  const classes = useStyle();
  return (
    <div className={classes.navbar} >

    {NavbarData.map((item)=>(
      <div  className={classes.item_div} >
        <img src={item.url} alt="" />
        <div>
        <p className='item_text' >{item.text}</p>
        <BiChevronDown className={item.status==true?classes.show:classes.hide}/>
        </div>
      </div>
    ))}

    </div>
  )
}
