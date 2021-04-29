import React, { useState } from "react";
import "./nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Nav = ({action}) => {
  const [value, setValue] = useState("");

  const handleOpenDropDown = () => {
    const dropDown = document.querySelector(".goods-div .drop-down");
    dropDown.classList.contains("drop-down-show")
      ? dropDown.classList.remove("drop-down-show")
      : dropDown.classList.add("drop-down-show");
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
  action(e.target.value)
  };
  const handleChange= (e)=> {
    e.preventDefault()
    setValue(e.target.value)
  }
  return (
    <nav className="navigation">
      <div className="navigation__section">
        <span className="logo">Vinted</span>
        <div className="right">
          <div className="goods-div">
            <button onClick={handleOpenDropDown}>
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

          <div className="search-form">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input
              type="text"
              placeholder="Ieškoti prekių"
              className="input"
              onKeyPress={(e)=> e.key ==="Enter" && handleKeyPress(e)}
              onChange={handleChange}
              value={value}
            />
          </div>
        </div>
        <div className="buttons-wrap">
          <button className="btn-global register-btn">
            Registruotis <span>|</span> Prisijungti
          </button>
          <button className="btn-global btn-global-primary custom-sign">
            Parduok dabar
          </button>

          <button className="question">?</button>
        </div>
      </div>
    </nav>
  );
};
