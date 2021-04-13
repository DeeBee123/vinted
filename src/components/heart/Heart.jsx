import React from "react";
import "./heart.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import data from "../../db.json"




export const Heart = ({favourite, likes})=>{
const handleClick=()=> {
console.log(favourite)
}
    return(<>
        <FontAwesomeIcon className={favourite? "heart active":"heart"} icon={faHeart} onClick={handleClick}/>
        <span className="fav-count">{likes}</span>
        </>
     )
}