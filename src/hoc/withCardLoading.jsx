import React from "react";
// import {Loading} from "../components/loading/Loading";

const withCardLoading =(checkLength)=> (Component)=> (props) => 
    checkLength(props) ? <span>Loading ..</span> : <Component {...props}/>
export default withCardLoading