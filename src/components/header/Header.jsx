import React from "react";
import "./header.scss"
import decor from "../../assets/ripped.png"

export const Header = ()=> {
    return (
        <section className="header">
            <img className="header__img" src={decor} alt="img"/>
        </section>
    )
}