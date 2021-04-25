import React from "react";
// import {Layout} from "./components/layout/Layout"
import {News} from "./features/news/News"
import {Header} from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <News />
    </div>
  );
}

export default App;
