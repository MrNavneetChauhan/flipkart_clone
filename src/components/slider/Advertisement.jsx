import React from 'react'
import { middleAdvertData } from '../../Data/middleAdvert'
import { makeStyles } from '@material-ui/core'

export const Advertisement = () => {
    
  const useStyle = makeStyles({

    middle_container:{
        display:"flex",
        gap:"5px",
        width:"98.9%",
        margin:"10px auto"
    },

    middle_img:{
        width:"33%"
    }


    })

const classes = useStyle()
  return (
      <>
    <div className={classes.middle_container} >
        {
            middleAdvertData.map((item)=>(
                <img className={classes.middle_img} src={item.url} alt="" />
            ))
        }
    </div>
    <img style={{width:"98.9%",margin:"auto",marginLeft:"5px"}} src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" alt="" />
    </>
  )
}
