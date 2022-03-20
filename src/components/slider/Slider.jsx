import React from "react";
import { useStyle } from "./sliderStyle";
import { products } from "../../Data/sliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./sliderStyle";
import Countdown from "react-countdown";

export const Slider = ({ showDiv }) => {
  const classes = useStyle();
  const timer_img =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const advert_url =
    "https://rukminim1.flixcart.com/flap/464/708/image/2d89a797bdedbd39.jpeg?q=70";
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p style={{ color: "tomato", fontWeight: 500 }}>Offer Expired!</p>;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds} Left{" "}
        </span>
      );
    }
  };

  return (
    <div className={classes.slider_container}>
      {/* will divide this container into two part left and right */}
      <div className={showDiv ? classes.left_div : classes.full_left_div}>
        <div className={classes.timer_div}>
          <div>
            <h2>Deal of the day</h2>

            {showDiv && (
              <>
                <img
                  style={{ width: "30px", height: "30px", marginRight: "5px" }}
                  src={timer_img}
                  alt=""
                />
                <Countdown renderer={renderer} date={Date.now() + 8.64e7} />
              </>
            )}
          </div>

          <div>
            <div>VIEW ALL</div>
          </div>
        </div>

        {/* slider div starts here */}

        <div className={classes.slider_div}>
          <div className={classes.slider_center}>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {products.map((item) => (
                <div key={item.id} className={classes.item_div}>
                  <img src={item.url} alt="" />
                  <div>
                    <p>{item.title.shortTitle}</p>
                    <p>{item.discount}</p>
                    <p>{item.tagline}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* in second container i will put advertisment */}
      <div className={showDiv ? classes.right_div : classes.hide_div}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={advert_url}
          alt=""
        />
      </div>
    </div>
  );
};
