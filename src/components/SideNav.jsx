import React, { useState } from "react";
import { Collapse, Container, Row, Col } from "react-bootstrap";

const SideNav = () => {
  // let [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let [color, setColor] = useState("");
  let buttonColor = {
    backgroundColor: color,
  };

  return (
    <div className="sidenav">
      <Container>
        <Row>
          <img
            className="logo"
            src={require("../images/logo_white.png")}
            alt=""
          />
          <p className="apotek-text">Apotek Rizal</p>
        </Row>
        <Row>
          <img
            className="eclipse"
            src={require("../images/Ellipse.png")}
            alt=""
          />
          <p className="username">Rizal</p>
        </Row>
        <Row className="pointer">
          <img className="pos" src={require("../images/pos.png")} alt="" />
          <p className="kasir-text">Kasir</p>
        </Row>
        <Row className="pointer" onClick={() => setOpen(!open)}>
          <img
            className="inventory-icon"
            src={require("../images/inventory.png")}
            alt=""
          />
          <p className="kasir-text">Inventori</p>
        </Row>

        <Collapse in={open}>
          <div className="dropdown-up">
            <Row
              className="pointer"
              style={buttonColor}
              onClick={() => setColor((color = "#0b93a2"))}
            >
              <p className="stok-text">Stok barang</p>
            </Row>
            <Row
              className="pointer"
              style={buttonColor}
              onClick={() => setColor((color = "#0b93a2"))}
            >
              <p className="stok-text">Faktur Pembelian</p>
            </Row>
            <Row className="pointer">
              <p className="stok-text">PBF</p>
            </Row>
            <Row className="pointer">
              <p className="stok-text">Stok opnam</p>
            </Row>
          </div>
        </Collapse>

        <Row className="pointer">
          <img className="pos" src={require("../images/setting.png")} alt="" />
          <p className="kasir-text">Pengaturan</p>
        </Row>
      </Container>
    </div>
  );
};

export default SideNav;
