import React, { useState, useEffect } from "react";
import "./news.scss";
import API from "../../shared/api";
import Card from "../../components/card/Card";

export const News = ({input}) => {
  const [postsID, setPostsID] = useState([]);
  const [error, setError] = useState(false);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
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
          <Card key={post.id} productID={post.id} brands={brands} input={input}/>
        ))}

        {/* <div className="card-button" onClick={handleClickAll}>
          <span>Rodyti visas prekes</span>
        </div> */}
      </div>
    </div>
  );
};
