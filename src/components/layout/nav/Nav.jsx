import React from "react";
import "./nav.scss";

export const Nav = () => {
  return (
    <nav className="navigation">
      <div className="navigation__section">
        <span className="logo">Vinted</span>

        <form action="" className="search-form">
          <select name="" id="" className="form-selection">
            <option value="goods" selected className="form-selection__option">
              Prekės
            </option>
            <option value="members" className="form-selection__option">
              Nariai
            </option>
            <option value="forum" className="form-selection__option">
              Forumas
            </option>
            <option value="help" className="form-selection__option">
              Pagalbos centras
            </option>
          </select>

          <div className="search">
            <img src="" alt="" className="search__icon" />
            <input
              type="search"
              placeholder="Ieškoti prekių"
              className="search__input"
            />
          </div>
        </form>

        <button className="register-sign-btn">
          Registruotis <span>|</span> Prisijungti
        </button>
        <button className="sell-btn">Parduok dabar</button>
        <div>
          <span>?</span>
        </div>
        <select name="" id="" className="lang-selection">
          <option value="" selected>
            LT
          </option>
          <option value="">Lietuvių (Lithuanian)</option>
        </select>
      </div>
    </nav>
  );
};
