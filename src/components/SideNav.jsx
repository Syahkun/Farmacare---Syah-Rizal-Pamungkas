import React, { useState } from "react";

const SideNav = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidenav">
      <div className="container">
        <div className="row">
          <img
            className="logo"
            src={require("../images/logo_white.png")}
            alt=""
          />
          <p className="apotek-text">Apotek Rizal</p>
        </div>
        <div className="row">
          <img
            className="eclipse"
            src={require("../images/Ellipse.png")}
            alt=""
          />
          <p className="username">Rizal</p>
        </div>
        <div className="row pointer">
          <img className="pos" src={require("../images/pos.png")} alt="" />
          <p className="kasir-text">Kasir</p>
        </div>
        <div
          className="row pointer"
          onClick={() => setIsOpen(isOpen ? (isOpen = false) : (isOpen = true))}
        >
          <img
            className="inventory-icon"
            src={require("../images/inventory.png")}
            alt=""
          />
          <p className="kasir-text">Inventori</p>
        </div>
        <h1>{isOpen}</h1>
        {isOpen ? (
          <div className="dropdown-up  w3-animate-top">
            <div className="row pointer">
              <p className="stok-text">Stok barang</p>
            </div>
            <div className="row pointer">
              <p className="stok-text">Faktur Pembelian</p>
            </div>
            <div className="row pointer">
              <p className="stok-text">PBF</p>
            </div>
            <div className="row pointer">
              <p className="stok-text">Stok opnam</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="row pointer">
          <img className="pos" src={require("../images/setting.png")} alt="" />
          <p className="kasir-text">Pengaturan</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
