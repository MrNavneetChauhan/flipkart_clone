import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    details_div:{
        marginTop:"56px",
        border:"1px solid white"
    },

    work_div:{
        // border:"1px solid black",
        marginTop:"5px"
    },

    left_div:{
        border:"1px solid red",
        width:"35%",
        height:"550px",
        position:"fixed",
        left:"0"
        
    },

    right_div:{
        // border:"1px solid blue",
        width:"62%",
        position:"absolute",
        right:"0"
    },

    short_title:{

        color:"#878787",
        fontWeight:"500",
        fontSize:"15px",
        marginBottom:"4px"
    },

    long_title:{
        fontSize:"16px",
        fontWeight:"450",
        marginBottom:"10px"
    },

    special_price:{
        color:"green",
        fontWeight:"500",
        marginBottom:"5px"
    },

    price_info:{
        display:"flex",
        // border:"1px solid black",
        // width:"315px",
        alignItems:"center",
        marginBottom:"6px",
        gap:"10px"

    },

    hurry_div:{
        display:"flex",
        gap:"5px",
        marginBottom:"5px",
        // border:"1px solid red",

        '&>P:nth-child(1)':{
            color:"green"
        }

    },

    price:{
        fontSize:"25px",
        fontWeight:"500"
    },

    offer:{
        color:"tomato"
    },
    strike:{
        color:"#878787",
        fontSize:"16px"
    },
    rating_div:{
        display:"flex",
        alignItems:"center",
        // border:"1px solid black",
        width:"315px",
        justifyContent:"space-between",
        height:"25px",
        marginBottom:"10px"
    },

    rating_tag:{
        // border:"1px solid black",
        background:"#26A541",
        color:"white",
        height:"95%",
        display:"flex",
        alignItems:"center",
        fontSize:"15px",
        width:"52px",
        justifyContent:"center",
        borderRadius:"12px"
    },

    star:{
        fontSize:"13px"
    },

    no_of_reviews:{
        color:"gray",
        fontSize:"15px",
        fontWeight:"500"
    },

    special_offers:{
        // border:"1px solid black",
        lineHeight:"35px",
        '&>div':{
            display:"flex",
            alignItems:"center",
            gap:"5px",
            flexWrap:"wrap"
        }
    },

    label:{
        color:"#14BE47",
        fontSize:"12px"
    },
    available:{
        fontWeight:"500",
        fontSize:"20px"
    },

    clr:{
        fontSize:"13px",
        color:"#2874F0",
        cursor:"pointer"
    },

    delievery_div:{
        border:"1px solid black",
        width:"98%",
        height:"100px",
        display:"flex",
        justifyContent:"space-between"

    },

    services_div:{
        display:"flex",
        border:"1px solid black",
        gap:"60px",
        '&>div':{
            border:"1px solid red",
            '&>div':{
                display:"flex",
                gap:"10px"
            }
        }
    }

})