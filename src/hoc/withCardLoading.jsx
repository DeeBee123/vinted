import React from "react";
import {Loading} from "../components/loading/Loading";

const withCardLoading = (Component)=> (props) => 
    !props.productID.length ? <span>Loading ..</span> : <Component {...props}/>
export default withCardLoading