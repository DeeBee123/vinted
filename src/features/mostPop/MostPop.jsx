import React from "react";

import data from "../../db.json";

import { Card } from "../../components/card/Card";
import "./mostPop.scss"

export const MostPop = () => {
  return (
    <div className="cards-row">
      {data.posts.map((post) => (
        <Card
        key={post.id}
          imgURL={post.imgURL}
          price={post.price}
          favourite={post.favourite}
          likes={post.likes}
          size={post.size}
          brand={post.brand}
        />
      ))}
    </div>
  );
};
