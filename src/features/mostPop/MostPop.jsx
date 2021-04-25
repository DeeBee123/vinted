import React, { useState, useEffect } from "react";
// import data from "../../db.json";
// import Card from "../../components/card/Card";
import "./mostPop.scss";
import API from "../../shared/api";
import  CardWithCompose  from "../../hoc/withCompose";

export const MostPop = () => {
  const [postsID, setPostsID] = useState([]);
  const [error, setError] = useState(false);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    console.log("effectas news");
    API.get(`news/`)
      .then((response) => {
        error && setError(false);
        setPostsID(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [error]);

  useEffect(() => {
    console.log("effect brands");
    API.get(`brands/all`)
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mostPop-section">
      <h2 className="section-title">Naujienų srautas</h2>
      <div className="cards-row">
        {postsID.map((post) => (
          <CardWithCompose key={post.id} productID={post.id} brands={brands} />
        ))}
        {/* <div className="card-button" onClick={handleClickAll}>
          <span>Rodyti visas prekes</span>
        </div> */}
      </div>
    </div>
  );
};
