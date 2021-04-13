import React from "react";
import "./card.scss"
import {Heart} from "../heart/Heart"

export const Card = ({imgURL, price, favourite, likes, size, brand})=> {

    return(
<div>
    <img className="image" src={imgURL} alt=""/>
    <div>
        <div><span>{price} EUR</span> <Heart favourite={favourite} likes={likes}/></div>
        <span>{size}</span>
        {brand!=='' &&<span>{brand}</span>}
    </div>
</div>
    )
}