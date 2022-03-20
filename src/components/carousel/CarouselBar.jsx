import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {carouselData} from "../../Data/carouselData";
import { useStyle } from './carouselStyle';

export const CarouselBar = () => {

  const classes = useStyle()
  return (
    <div className={classes.carousel_bar}>
      <Carousel className={classes.carousel_div}
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      interval={3000}
      animation={"slide"}
      navButtonsProps={
        {
          style:{
            // border:"1px solid black",
            borderRadius:"10px",
            background:"white",
            color:"#202020",
            height:"110px",
            marginLeft:"1px",
            marginRight:"1px",
            marginTop:"-30px",
          }
        }
      }
      >
            {
                carouselData.map(item=>(
                  <img key={Date.now()} className={classes.carousel_img} src={item.url} alt="" />
                ))
            }
        </Carousel>
    </div>
  )
}
