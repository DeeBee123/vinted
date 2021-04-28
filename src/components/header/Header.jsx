import React from "react";
import "./header.scss"
import decor from "../../assets/ripped.png"
import {ModalHeader} from "../../components/modalHeader/ModalHeader"

export const Header = ()=> {
    return (
        <section className="header">
        <ModalHeader/>
            <img className="header__img" src={decor} alt="img"/>
        </section>
    )
}