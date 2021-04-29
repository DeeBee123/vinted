import React, {useState} from "react";
// import {Layout} from "./components/layout/Layout"
import {News} from "./features/news/News"
import {Header} from "./components/header/Header"
import {Nav} from "./components/nav/Nav"

function App() {
const [input, setInput]= useState("")
  const handleInputChange=(e)=> {
setInput(e)
  }
  return (
    <div className="App">
      <Nav action={handleInputChange}/>
      <Header/>
      <News input={input}/>
    </div>
  );
}

export default App;
