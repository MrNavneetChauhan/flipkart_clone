import { makeStyles } from "@material-ui/core";
console.log(makeStyles);
export const useStyle = makeStyles({
  slider_container: {
    // border: "1px solid black",
    width: "98.9%",
    margin: "auto",
    height: "325px",
    display: "flex",
    backgroundColor: "white",
  },

  left_div: {
    width: "81%",
    // border: "1px solid red",
  },


  timer_div: {
    borderBottom: "1px solid lightgray",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:"5px",

    "&>div:nth-child(1)": {
      // border: "1px solid brown",
      width: "30%",
      display: "flex",
      alignItems: "center",
      color: "gray",

      "&>h2": {
        marginRight: "20px",
        fontWeight: "600",
        color: "black",
      },
    },

    "&>div:nth-child(2)": {
      width: "20%",
      // border: "1px solid black",
      height: "100%",
      display: "grid",
      placeContent: "center",

      "&>div": {
        backgroundColor: "#2874F0",
        width: "110px",
        color: "white",
        fontSize: "15px",
        height: "35px",
        display: "grid",
        placeContent: "center",
        borderRadius: "2px",
        cursor: "pointer",
      },
    },
  },

  right_div: {
    width: "19%",
    // border: "1px solid brown",
  },

  clr: {
    color: "red",
  },

  slider_div: {
    // border: "1px solid blue",
    display: "flex",
    alignItems: "center",
  },

  slider_center: {
    height: "254px",
    width:"100%",
    // border:"1px solid red",
    padding:"5px",

    paddingTop:"10px"
  },

  item_div:{
    height:"240px",
    width:"190px",
    padding:"10px",
    cursor:"pointer",
    textAlign:"center",
    // border:"1px solid black",
    '&:hover':{

      boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    },

    '&>img':{
      width:"100%",
      height:"70%",
      objectFit:"contain"

    },

    '&>div':{

      lineHeight:"24px"
    },


    '&>div>p':{
      fontSize:"14px"
    },

    '&>div>p:nth-child(2)':{
      color:"green"
    },

    '&>div>p:nth-child(3)':{
      color:"gray"
    }
  },

  hide_div:{
display:"none"
  },

  full_left_div:{
    width:"100%"
  },

  item_link:{
    textDecoration:"none",
    color:"inherit"
  }


});

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
