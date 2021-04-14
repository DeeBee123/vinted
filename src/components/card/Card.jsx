import React from "react";
import "./card.scss"
import {Heart} from "../heart/Heart"

export const Card = ({imgURL, price, favourite, likes, size, brand})=> {

    return(
<div className="card">
    <img className="image" src={imgURL} alt=""/>
    <div className="info">
        <div className="row"><span className="price">{price.toFixed(2)} &euro;</span> <Heart favourite={favourite} likes={likes}/></div>
        <span className="size">{size.join('/')}</span>
        {brand!=='' &&<div className="brand">{brand}</div>}
    </div>
</div>
    )
}