import React, {useState} from "react";
import "./heart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import data from "../../db.json";

export const Heart = ({ favourite, likes }) => {
const [fav, setFav]= useState(favourite)
const [likeNumb, setLikeNumb]= useState(likes)
  const handleClick = () => {
      if (fav){
          setFav(false)
          setLikeNumb(prev => prev -1)
      } else {
        setFav(true)
        setLikeNumb(prev => prev +1)
      }
    // fav ? setFav(false) : setFav(true)
  };
  return (
    <>
      <FontAwesomeIcon
        className={fav ? "heart active" : "heart"}
        icon={faHeart}
        onClick={handleClick}
      />
      <span className="fav-count">{likeNumb}</span>
    </>
  );
};
