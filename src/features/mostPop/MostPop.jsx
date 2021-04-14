import React, {useState, useEffect} from "react";
import data from "../../db.json";
import { Card } from "../../components/card/Card";
import "./mostPop.scss"

export const MostPop = () => {
const[posts, setPosts] = useState(data.posts)
useEffect(()=>{
let favPosts = [...posts].sort((a,b)=>b.likes -a.likes).slice(0,4)
setPosts(favPosts)
}, [])
const handleClickAll = ()=> {
  let favPostsAll = [...data.posts].sort((a,b)=> b.likes - a.likes)
  setPosts(favPostsAll)
}
  return (
    <div className="mostPop-section">
    <h2>Populiarios prekės</h2>
    <div className="cards-row">
      {posts.map((post) => (
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
    <div className="card-button" onClick={handleClickAll}><span>Rodyti visas prekes</span></div>
    </div>
    </div>
  );
};
