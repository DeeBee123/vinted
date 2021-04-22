import React, { useState, useEffect } from "react";
import data from "../../db.json";
import { Card } from "../../components/card/Card";
import "./mostPop.scss";
import API from "../../shared/api";

export const MostPop = () => {
  const [postsID, setPostsID] = useState([]);
  const [error, setError] = useState(false);
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
  }, []);

  return (
    <div className="mostPop-section">
      <h2>Populiarios prekės</h2>
      <div className="cards-row">
        {postsID.map((post) => (
          <Card key={post.id} productID={post.id} />
        ))}
        {/* <div className="card-button" onClick={handleClickAll}>
          <span>Rodyti visas prekes</span>
        </div> */}
      </div>
    </div>
  );
};
