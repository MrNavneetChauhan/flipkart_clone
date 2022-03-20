import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import {gettingFunction} from "../../redux/productDetails/actions"
import { useStyles } from "./productDetailsStyle";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import {Navbar} from "../Navbar/Navbar";
import { ShortNav } from "./shortnav";

export const ProductDetails = () => {
  const {id} = useParams()
  const {loading,error,data} = useSelector((store)=>store.productDetailsReducer)
  const dispatch = useDispatch();
  const getData = ()=>{
    dispatch(gettingFunction(id))
  }
  useEffect(()=>{
    getData()
  },[])

  // styling part starts here

  const classes = useStyles()

  return (
    <div className={classes.details_div}>
      <div>
        <ShortNav/>
      </div>
      {/* i will split thips div into two parts */}
      <div className={classes.work_div} >
      <div className={classes.left_div} >

      </div>
      <div className={classes.right_div}>
        <div>
          <p className={classes.short_title} >{}</p>
          <p className={classes.long_title}>{data.title.longTitle}</p>
        <p className={classes.special_price} >Special price</p>
        {/* price strik and discount */}
        <div className={classes.price_info} >
          <p className={classes.price} >₹{data.price.mrp}</p>
          <strike className={classes.strike}>₹{data.price.cost}</strike>
          <div className={classes.hurry_div} >
          <p>{data.price.discount} off</p>
          <img style={{width:"17px",height:"17px",cursor:"pointer"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_6c1a38.svg" alt="" />
           
           <p className={classes.offer} >Hurry Only few left!</p>

          </div>
        </div>
        {/* rating and reviews and assured icon */}
        <div className={classes.rating_div} >
          <div className={classes.rating_tag}>
            4.1 <StarIcon  style={{fontSize:"15px"}} />
          </div>
          <p className={classes.no_of_reviews} >{Math.floor(Math.random()*1000)} ratings and {Math.floor(Math.random()*400)} reviews</p>
          <img style={{width:"65px",}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
        </div>

        {/*special offers */}

        <div className={classes.special_offers} >
          <p className={classes.available} > Available offers</p>
          <div>
            <LocalOfferIcon style={{fontSize:"20px"}} className={classes.label} />
            <h4>Special Price</h4>
            <p>Get extra {Math.floor(Math.random()*30)}% off (price inclusive of discount)</p>
            <h5 className={classes.clr}>T&C</h5>
          </div>
          <div>
            <LocalOfferIcon style={{fontSize:"20px"}} className={classes.label} />
            <h4>Bank Offer</h4>
            <p>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
            <h5 className={classes.clr}>T&C</h5>
          </div>
          <div>
            <LocalOfferIcon style={{fontSize:"20px"}} className={classes.label} />
            <h4>Partner Offer</h4>
            <p>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*</p>
            <h5 className={classes.clr}>Know More</h5>
          </div>
          <div>
            <LocalOfferIcon style={{fontSize:"20px"}} className={classes.label} />
            <h4>Partner Offer</h4>
            <p>Order More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction</p>
            <h5 className={classes.clr} >Know More</h5>
          </div>

        </div>

{/* delievery div stats here */}
        <div className={classes.delievery_div} >
          <div>
            <img style={{width:"17px",height:"17px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="" />
            
            <p>Deliever to</p>

          </div>

          <div className={classes.services_div} >
            <p>Services</p>
            <div>
              <div>
                <img style={{width:"17px",height:"14px"}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjI1IDNsLTMgM2gyLjI1YzAgMi40ODItMi4wMTggNC41LTQuNSA0LjVhNC40MDMgNC40MDMgMCAwMS0yLjEtLjUyNUw1LjgwNSAxMS4wN0E1Ljk1IDUuOTUgMCAwMDkgMTJjMy4zMTUgMCA2LTIuNjg1IDYtNmgyLjI1bC0zLTN6TTQuNSA2YzAtMi40ODIgMi4wMTgtNC41IDQuNS00LjUuNzU4IDAgMS40NzcuMTg4IDIuMS41MjVMMTIuMTk1LjkzQTUuOTQ4IDUuOTQ4IDAgMDA5IDBDNS42ODUgMCAzIDIuNjg1IDMgNkguNzVsMyAzIDMtM0g0LjV6IiBmaWxsPSIjMjE3NUZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="" />
                <p>14 Days Return Policy</p>
                <img src="" alt="" />
              </div>
              <div>
                
              <img style={{width:"17px",height:"17px"}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0wIDEwYzAgNS41MjIgNC40NzggMTAgMTAgMTBzMTAtNC40NzggMTAtMTBTMTUuNTIyIDAgMTAgMCAwIDQuNDc4IDAgMTB6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiMyODc0RjAiIG1hc2s9InVybCgjYikiIGQ9Ik0tNS41NTYgMjUuNTU2aDMxLjExMlYtNS41NTZILTUuNTU2eiIvPjwvZz48cGF0aCBkPSJNMTEuMDIgNy41MnMyLjI1Ni4xIDIuMjU2IDIuNjFjMCAyLjQ1LTMuMDggMi43MjQtNC4wNyAyLjc1NGEuMTIuMTIgMCAwMC0uMDg3LjJsNC4wOCA0Ljg0NU04LjY1NyA3LjUyaDYuODQ1bS02Ljg0NSAyLjYzNWg2Ljg0NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzIiIHN0cm9rZT0iI0ZGRiIvPjwvZz48L3N2Zz4=" alt="" />
                <p>14 Days Return Policy</p>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>



        </div>
      </div>
      </div>
    </div>
  )
}
