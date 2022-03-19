import React, { useState,useContext } from "react";
import { useStyle } from "./headStyle";
import {FaSearchDollar} from "react-icons/fa";
import {BiChevronDown} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LoginDialog } from "../login/Login";
import {UserContext} from "../context/user.context";
import { Profile } from "./Profile";


export const Header = () => {
  const classes = useStyle();
  const [open,setOpen] = useState(false);
  const {user,updateUser} = useContext(UserContext)

  let logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  let plusUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
  let searchPlaceholder = "Search for porducts,brands and more"
  return (
    <div className={classes.header}>
      <div className={classes.flexbox}>
        <div className={classes.left_flexbox}>
          {/* left flex box */}
          <Link to={"/"} className={classes.logo_div}>
            <img className={classes.logo_img} src={logoUrl} alt="" />
            <p className={classes.logo_txt}>
              Explore <span>Plus</span> <img className={classes.plus_img} src={plusUrl} alt="" />{" "}
            </p>
          </Link>
          <div className={classes.searchbar_div}>
            <input placeholder={searchPlaceholder} className={classes.search_input} type="text" name="" id="" />
            <div className={classes.search_icon_div}><FaSearchDollar className={classes.fa} /></div>
          </div>
        </div>
        {/* right flex box */}
        <div className={classes.right_flex_box}>

{ user? <Profile user={user} updateUser={updateUser}  />:
          <div onClick={()=>{
            setOpen(!open)
            console.log(open)
          }} >
            <p>Login</p>
          </div>

        }
          <div>
            <p>More</p>
            <BiChevronDown/>
          </div>
          <Link className={classes.cartDiv} to={"/cart"} >
            <div>10</div>
            <FaShoppingCart/>
            <p>Cart</p>
          </Link>
        </div>
      <LoginDialog open={open} updateUser={updateUser} setOpen={setOpen} /> 
      </div>
    </div>
  );
};
