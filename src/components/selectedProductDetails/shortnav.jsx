import { makeStyles } from "@material-ui/styles"
import { KeyboardArrowDownOutlined } from "@mui/icons-material"

export const ShortNav = ()=>{

    const useStyles = makeStyles({
        flex_div:{
            display:"flex",
            borderBottom:"1px solid lightgray",
            justifyContent:"space-around",
            padding:"6px 20px 6px 20px"
        },

        flex:{
            display:"flex",
            alignItems:"center",
            cursor:"pointer",
            '&>p':{
                fontWeight:"500",
                fontSize:"14px"
            }
            
        }
    })

    const classes = useStyles()

return (
    <div className={classes.flex_div} >
        <div className={classes.flex} >
            <p>Electronis</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Tv & Appliances</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Men</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Women</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Baby & Kids</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Home & Furniture</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Sports, Books&More</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Flights</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
        <div className={classes.flex} >
            <p>Offer Zone</p>
            <KeyboardArrowDownOutlined style={{fontSize:"13px"}} />
        </div>
    </div>
)
}