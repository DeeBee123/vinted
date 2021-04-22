import React from "react";
// import {Layout} from "./components/layout/Layout"
import {MostPop} from "./features/mostPop/MostPop"
import {Header} from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <MostPop />
    </div>
  );
}

export default App;
