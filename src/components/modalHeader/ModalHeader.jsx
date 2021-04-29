import React from "react";
import "./modalheader.scss";

export const ModalHeader = () => {
  return (
    <div className="modal">
      <h1>Atėjo metas atlaisvinti vietos spintoje?</h1>
        <a href="#" className="btn-global btn-global-primary">Parduok</a>
        <a href="#" className="link-to-how">Sužinok, kaip</a>
    </div>
  );
};
