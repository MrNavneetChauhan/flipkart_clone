import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(
    {
        header:{
            // border:"1px solid black",
            height:"56px",
            background:"#2874f0",
            display:"flex",
            alignItems:"center",
            position:"fixed",
            width:"100vw",
            top:"0",
            zIndex:"5"

        },

        // row wise styling, 1>flex box 

        flexbox:{
            // border:"1px solid red",
            width:"78%",
            height:"70%",
            display:"flex",
            margin:"auto",
            justifyContent:"space-between"

        },

        // inside flex box let's style it's firs child

        left_flexbox:{
            // border:"1px solid blue",
            display:"flex",
            width:"65%",
            height:"100%",
            alignItems:"center",
            justifyContent:"space-between"
        },

        //inside flex's left --> it's child styling

        logo_div:{
            display:"flex",
            flexDirection:"column",
            width:"13%",
            // border:"1px solid navy",
            height:"90%",
            alignItems:"center",
            cursor:"pointer",
            textDecoration:"none"
        },

        logo_img:{
            height:"60%",
            width:"100%",
            objectFit:"contain"
        },
        logo_txt:{
            height:"40%",
            margin:"0",
            fontSize:"11px",
            color:"white",
            fontStyle:"italic",
            display:'flex',
            fontWeight:"500",
            '& > span':{
                color:"#ffe500",
                marginLeft:"3px"
            }
        },

        plus_img:{
            width:"12px",
            height: "12px",
            objectFit:"cover",
            marginLeft:"3px"
        },


        // search div box

        searchbar_div:{
            border:"1px solid white",
            display:"flex",
            width:"85%",
            height:"95%",
            borderTopLeftRadius:"2px",
            borderBottomLeftRadius:"2px",
            borderTopRightRadius:"2px",
            borderBottomRightRadius:"2px"


        },

        search_input:{
            width:"93%",
            border:"none",
            outline:"none",
            paddingLeft:"5px",
            fontSize:"14px",
            '&::placeholder':{
                color:"gray"
            }

        },

        search_icon_div:{
            width:"7%",
            background:"white",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            cursor:"pointer"
        },

        fa:{
            color:"#2874f0",
            fontSize:"20px"
        },

        // flex box second right child//

        right_flex_box:{
            display:"flex",
            // border:"1px solid pink",
            width:"30%",
            justifyContent:"space-around",
            alignItems:"center",
            color:"white",

            '&>div:nth-child(1)':{
                border:"1px solid white",
                color:"#2874f0",
                width:"120px",
                height:"85%",
                backgroundColor:"white",
                display:"grid",
                placeContent:"center",
                fontWeight:"500",
                borderRadius:"2px",
                cursor:"pointer"
            },

            '&>div:nth-child(2)':{
                // border:"1px solid red",
                width:"100px",
                display:"flex",
                height:"95%",
                alignItems:"center",
                justifyContent:"center",
                padding:"3px",
                marginLeft:"20px"

            },

        },
        cartDiv:{
            display:"flex",
            width:"70px",
            // border:"1px solid green",
            height: "95%",
            justifyContent:"space-around",
            alignItems:"center",
            textDecoration:"none",
            color:"white",
            '&>div':{
                border:"1px solid white",
                height:"19px",
                width:"19px",
                position:"relative",
                top:"-15px",
                right:"-25px",
                borderRadius:"35%",
                background:"#ff6161",
                display:"grid",
                placeContent:"center",
                fontSize:"10px",
                padding:"2px"

            }
        }

    }
)