import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {Layout} from "./components/layout/Layout"
import { News } from "./features/news/News";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { SingleProduct } from "./features/singleProduct/SingleProduct";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState()
  const handleInputChange = (e) => {
    setInput(e);
  };
const handleData = (e) => {
setData(e)
}
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Nav action={handleInputChange} />
          <Header />
          <News input={input} action={handleData}/>
        </Route>
        <Route path="/product/:id">
        <Nav action={handleInputChange} />
          <SingleProduct data={data}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
