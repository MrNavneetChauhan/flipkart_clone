
import {makeStyles} from "@material-ui/core"

export const useStyle = makeStyles({

    dialog:{
        width:"50vw",
        height: "70vh",
        // border:"1px solid black",
        display:"flex",
        padding:"0",
        margin:"0",
        paddingTop:"0"
        
    },

    left:{
        // border:"1px solid brown",
        height:"100%",
        width:"37%",
        backgroundColor:"#2874F0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"45px 0 45px 0"


    },

    right:{
        // border:"1px solid green",
        width:"63%",
        padding:"45px 0 25px 0"
    },

    logo:{
        // border:"1px solid black",
        height:"33%",
        width:"90%",

        '&>img':{
            width:"100%",
            height:"100%",
            objectFit:"contain"
        }
    },

    login_info:{
        // border:"1px solid black",
        // width:"70%",
        // height:"32%",
        padding:"0 35px 0 35px",
        textAlign:'left',
        lineHeight:"25px",
        fontWeight:"300",
        color:"white",  

        '&>h1':{

            marginBottom:"20px",
            fontSize:"24px"
        },

        '&>p':{
            fontSize:"17px",
        }
    },

    login_id:{
        // border:"1px solid red",
        height:"100%",
        width:"80%",
        margin:"auto",
        

    },

    input_one:{
        width:"100%",
        height:"35px",
        paddingLeft:"10px",
        fontSize:"16px",
        border:"none",
        borderBottom:"1px solid lightgray",
        outline:"none",
        marginBottom:"25px",
        '&::placeholder':{
            fontSize:"16px"
        }
    },


    pass_div:{
        display:"flex",
        fontSize:"16px",
        '&>p':{
            width:"20%",
            border:"none",
            borderBottom:"1px solid lightgray",
            display:"grid",
            placeContent:"center",
            color:"#2874F0",
            fontWeight:"500",
            cursor:"pointer"
        }
    },



    input_two:{
        width:"80%",
        height:"35px",
        paddingLeft:"10px",
        fontSize:"16px",
        border:"none",
        borderBottom:"1px solid lightgray",
        outline:"none",
        '&::placeholder':{
            fontSize:"16px"
        }
    },

    term:{
        fontSize:"12px",
        marginTop:"30px",
        marginBottom:"10px",
        color:"gray",
        '&>span':{
            color:"#2874F0"
        }
    },

    login_btn:{
        // border:"1px solid black",
        width:"100%",
        margin:"auto",
        height:"45px",
        display:"grid",
        placeContent:"center",
        backgroundColor:"#FB641B",
        color:"white",
        fontWeight:"500",
        borderRadius:"2px",
        cursor:"pointer"
    },

    or:{
        // border:"1px solid black",
        display:"grid",
        placeContent:"center",
        height:"45px",
        fontWeight:"500",
        color:"gray"
    },


    otp:{
        boxShadow:"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        display:"grid",
        placeContent:"center",
        height:"45px",
        color:"#2874F0",
        fontWeight:"500",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"rgba(0, 0, 0, 0.046)",

        }
    },

    create_account:{
        // border:"1px solid black",
        display:"grid",
        marginTop:"50px",
        placeContent:"center",
        height:"45px",
        color:"#2874F0",
        '&>p':{
            cursor:"pointer"
        }
    },

    error:{
        fontSize:"11px",
        color:"#ff6161",
        marginTop:"2px"
    }


})