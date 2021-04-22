import React, {useEffect} from "react";
import "./card.scss"
import {Heart} from "../heart/Heart"
import API from "../../shared/api"

export const Card = ({productID})=> {
useEffect(()=> {
API.get(`products/${productID}/`)
.then(response => {
    console.log(response)
})
.catch(error=> console.log(error))
},[])
    return(
<div className="card">
    {/* <img className="image" src={imgURL} alt=""/>
    <div className="info">
        <div className="row"><span className="price">{price.toFixed(2)} &euro;</span> <Heart favourite={favourite} likes={likes}/></div>
        <span className="size">{size.join('/')}</span>
        {brand!=='' &&<div className="brand">{brand}</div>}
    </div> */}
</div>
    )
}