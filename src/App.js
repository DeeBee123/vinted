import React from "react";
// import {Layout} from "./components/layout/Layout"
import {News} from "./features/news/News"
import {Header} from "./components/header/Header"
import {Nav} from "./components/nav/Nav"

function App() {

//   const handleInputChange=(e)=> {
// console.log(e)
//   }
  return (
    <div className="App">
      <Nav />
      <Header/>
      <News />
    </div>
  );
}

export default App;
