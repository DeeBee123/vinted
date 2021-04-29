import React from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <nav className="navigation">
      <div className="navigation__section">
        <span className="logo">Vinted</span>
        <div className="right">
          <div className="goods-div">
            <button>
              Prekės
              <FontAwesomeIcon className="arrow" icon={faSortDown} />
            </button>

            <ul className="drop-down">
              <li>Prekės</li>
              <li>Nariai</li>
              <li>Forumas</li>
              <li>Pagalbos centras</li>
            </ul>
          </div>
          <form action="" className="search-form">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              <input
                type="search"
                placeholder="Ieškoti prekių"
                className="input"
              />
          </form>

          <button className="btn-global register-btn">
            Registruotis <span>|</span> Prisijungti
          </button>
          <button className="btn-global btn-global-primary custom-sign">Parduok dabar</button>
   
           <button className="question">?</button>
         
        </div>
      </div>
    </nav>
  );
};
