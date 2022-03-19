import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
    navbar:{
        // border:"1px solid black",
        height:"110px",
        display:"flex",
        justifyContent:"space-around",
        padding:"5px 15px 5px 15px",
        boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
        background:"#FFFFFF",
        marginTop:"56px"
    },

    item_div:{
        // border:"1px solid red",

        // width:"10%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer",

        '&:hover':{
            color:"#2874f0"
        },


        '&>img':{
            width:"80%",
            height:"70%",
            objectFit:"contain",
            // border:"1px solid black"
        },

        '&>div':{
            display:"flex",
            fontWeight:"550"
        },

        '&>div>p':{
            fontSize:"13px"

        }

    },

    hide:{
        display:"none",
    }


})