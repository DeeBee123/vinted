import React, { useEffect, useState } from "react";
import "./card.scss";
// import { Heart } from "../heart/Heart";
import API from "../../shared/api";

const Card = ({ productID, brands, input }) => {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    API.get(`products/${productID}`)
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [productID]);

  useEffect(() => {
    data.user &&  API.get(`users/${data.user}`)
      .then((response) => {
      
       setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, [data.user]);
const handleFilter = ()=> {
  let copyData = [...data].filter(data=> data.title.includes(input))
  input =""
  setData(copyData)
}
  return (
    <div className="card">
      {data.length !== 0 && input==="" ? (
        <>
          <div className="user-row">
            <div
              className="avatar"
              style={user.avatar && { backgroundImage: `url(${user.avatar})` }}
            ></div>
            <span className="user-name">{user.name}</span>
          </div>
          <div
            className="image"
            style={{ backgroundImage: `url(${data.img[data.main_img]})` }}
          ></div>
          <div className="info">
            <div className="row">
              <span className="price">{data.price.toFixed(2)} &euro;</span>
            </div>
            {data.size.length > 0 && (
              <span className="size">{data.size.join("/")}</span>
            )}
            <div className="brand">
              {brands.map((brand) => brand.id === data.brand && brand.title)}
            </div>
          </div>
        </>
      ): handleFilter}
      
    </div>
  );
};

export default Card;
