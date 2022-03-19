import { Dialog, DialogContent } from "@material-ui/core";
import React, { useState } from "react";
import { signupData,signInData } from "../service/signup.api";
import { useStyle } from "./loginStyle";
import { initialValue } from "./loginData";
import { userData,loginUserData } from "./loginData";

export const LoginDialog = ({ open, setOpen,updateUser }) => {
  const logoImg =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
  const classes = useStyle();

  const handleClose = () => {
    setOpen(!open);
    setAccount(initialValue.login);
  };
  const [account, setAccount] = useState(initialValue.login);
  const createAccount = () => {
    setAccount(initialValue.signup);
    // console.log(account);
  };


  const [signup, setSignup] = useState(userData);
  const [signin,setSignin] = useState(loginUserData);
  const [error,setError] = useState(false)

  const handleChange = (e) => {
    let { name } = e.target;
    setSignup({
      ...signup,[name]:e.target.value
    })
  };


  const onSignIn = (e)=>{

    let {name} = e.target;
    setSignin({

      ...signin,[name]:e.target.value

    })

  }


  const handleUserData = async()=>{
   let data =  await signupData(signup)
   if(!data){
     alert("Please enter your correct details")
     return;
   }
   handleClose()
   updateUser(`${signup.user_name}`)
  }


  const loginSuccess = async()=>{
    let data = await signInData(signin)
    if(!data){
      setError(true);
      return;
    }
    handleClose();
    updateUser(`${signin.user_name}`)

  }


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.dialog}>
        <div className={classes.left}>
          <div className={classes.login_info}>
            <h1 style={{ fontWeight: "400" }}>{account.heading}</h1>
            <p>{account.subHeading}</p>
          </div>
          <div className={classes.logo}>
            <img src={logoImg} alt="" />
          </div>
        </div>
        {/* right div for entering info */}

        {account.view === "login" ? (
          <div className={classes.right}>
            <div className={classes.login_id}>
              <input
                onChange={(e)=>onSignIn(e)}
                name="user_name"
                className={classes.input_one}
                placeholder="Enter Email/Mobile number"
                type="text"
              />

              <div className={classes.pass_div}>
                <input
                onChange={(e)=>onSignIn(e)}
                name="password"
                  className={classes.input_two}
                  placeholder="Enter Password"
                  type="password"
                />
                <p>Forgot?</p>
              </div>

              {error && <p className={classes.error} >Please check your login credentials.</p> }
              <p className={classes.term}>
                By continuing, you agree to Flipkart's <span>Terms of Use</span>{" "}
                and <span>Privacy Policy</span> .
              </p>

              <div onClick={()=>loginSuccess()} className={classes.login_btn}>Login</div>

              <p className={classes.or}>OR</p>

              <div className={classes.otp}>Request OTP</div>

              <div className={classes.create_account}>
                <p
                  onClick={() => {
                    createAccount();
                  }}
                >
                  New to Flipkart? Create an account
                </p>
              </div>
            </div>
          </div>
        ) : (
          // singup account started here
          <div className={classes.right}>
            <div className={classes.login_id}>
              <input
                onChange={(e) => handleChange(e)}
                name="first_name"
                className={classes.input_one}
                placeholder="First Name"
                type="text"
              />

              <input
                onChange={(e) => handleChange(e)}
                name="last_name"
                className={classes.input_one}
                placeholder="Last Name"
                type="text"
              />

              <input
                onChange={(e) => handleChange(e)}
                name="user_name"
                className={classes.input_one}
                placeholder="User name"
                type="text"
              />

              <input
                onChange={(e) => handleChange(e)}
                name="email_id"
                className={classes.input_one}
                placeholder="Email id"
                type="email"
              />

              <input
                onChange={(e) => handleChange(e)}
                name="password"
                className={classes.input_one}
                placeholder="Create Password"
                type="password"
              />

              <input
                onChange={(e) => handleChange(e)}
                name="mobile"
                className={classes.input_one}
                placeholder="Mobile Number"
                type="number"
              />

              <div onClick={()=>handleUserData()} className={classes.login_btn}>
                Signup
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
