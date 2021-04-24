import React, { useEffect, useState } from "react";
import "./card.scss";
// import { Heart } from "../heart/Heart";
import API from "../../shared/api";


export const Card = ({ productID, brands }) => {
  const [data, setData] = useState("");
  const [user, setUser]= useState("")

  useEffect(() => {
    console.log("effectas productID");
    API.get(`products/${productID}`)
      .then((response) => {
        // console.log(response.data)
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [productID]);

  useEffect(()=> {
    API.get(`users/${data.user}`).then((response)=> {
      console.log(response.data)
      setUser(response.data)
    }
    )
  }, [data])

  return (
    <div className="card">
      {data.length !== 0 && (
        <>
        <div className="user-row"><div className="avatar" style={ user.avatar &&{ backgroundImage: `url(${user.avatar})` }}></div><span className="user-name">{user.name}</span></div>
          <div
            className="image"
            style={{ backgroundImage: `url(${data.img[data.main_img]})` }}
          ></div>
          <div className="info">
            <div className="row">
              <span className="price">{data.price.toFixed(2)} &euro;</span>
            </div>
           {data.size.length >0 && <span className="size">{data.size.join("/")}</span>}
            <div className="brand">
              {brands.map((brand) => brand.id === data.brand && brand.title)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
