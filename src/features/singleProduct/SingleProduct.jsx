import React from "react";
import "./singleProduct.scss"

export const SingleProduct = () => {
  const img = [
    "https://in3.dev/vinted/images/products/009/01_00d68_BsAZUuyRi7mskrHrYWPXq8Rn.jpeg",
    "https://in3.dev/vinted/images/products/009/01_0120a_ZhdnpNPtXb58KpvH9MuJvrRQ.jpeg",
    "https://in3.dev/vinted/images/products/009/01_02638_uuJXg43cKAjPhVzhixhidDNS.jpeg",
    "https://in3.dev/vinted/images/products/009/02_00472_7wLqcgNzhVpD4eThSrFRkRbD.jpeg",
    "https://in3.dev/vinted/images/products/009/02_005a5_NZAs4UmsPxbfcArMkbWTyzjr.jpeg",
  ];

  //if img is more than 1 then render function
  //switch fuction case length
  //length 2 half half
  //length 3 left big, right half half
  //length  4 left big, right top med right bottom smals
  //length 5 left big, right in four smaller imgs
  //length more then button instead four appears
  //left has to be main
  function renderImages() {
    switch (img.length) {
      case 2:
        img.map((image) => (
          <div
            className="bgImg lg"
            style={{ backgroundImage: `url ${image}` }}
          ></div>
        ));
        break
      case 3:
        img.map((image) => (
          <div
            className={
              image[0] ? "bgImg lg" : image[1] ? "bgImg md" : "bgImg sm"
            }
            style={{ backgroundImage: `url ${image}` }}
          ></div>
        ));
        break
      default:
        <span>Oops something went wrong</span>;
    }
  }

  return (
    <section className="single-product">
      <div className="images-container">Images</div>
      <aside className="aside-bar">
        <div className="general-info">
          <div className="price side-price">18,00 &euro;</div>
          <ul className="list-items">
            <li>
              {" "}
              <span className="title">Prekės ženklas</span> <span className="clickable">ZARA</span>
            </li>
            <li>
              {" "}
              <span className="title">Dydis</span> <span>XS / 34 / 6</span>
            </li>
          </ul>
          <div className="inner-content">
            <h2 className="title">Tilte is here</h2>
            <p>
              {" "}
              Description b;aj dhhf ejfeh jsjafs jejwfej fdjjfsewj sdjfjsfejew.
            </p>
            <button className="btn-global btn-global-primary custom-sign">
              Teirautis
            </button>
            <button className="btn-global mark">Pažymėti</button>
          </div>
        </div>
        <div className="user-row">
          <div className="avatar" style={{ backgroundColor: `black` }}></div>
          <span className="user-name">egle_p</span>
        </div>
      </aside>
    </section>
  );
};
