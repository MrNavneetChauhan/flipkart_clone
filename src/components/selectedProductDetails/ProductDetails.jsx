import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import {gettingFunction} from "../../redux/productDetails/actions"
export const ProductDetails = ({history,match}) => {
  const {id} = useParams()
  const {loading,error,data} = useSelector((store)=>store.productDetailsReducer)
  const dispatch = useDispatch();
  
  console.log("data",data)

  const getData = ()=>{
    dispatch(gettingFunction(id))
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div style={{marginTop:"56px"}} >ProductDetails</div>
  )
}
