import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SideNavbar = (props) => {
  return (
    <SideNav
      style={{
        minWidth: props.minWidth,
        height: "100%",
        position: "fixed",
        backgroundColor: "#333951",
      }}
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle onClick={props.statusExpand} />
      <SideNav.Nav>
        <NavItem eventKey="home">
          <NavIcon style={{ display: "none" }}></NavIcon>
          <NavText>
            <img
              className="logo"
              src={require("../images/logo_white.png")}
              alt=""
            />
          </NavText>
        </NavItem>
        <NavItem eventKey="store">
          <NavIcon style={{ display: "none" }}>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>
            <p className="apotek-text">Apotek Rizal</p>
          </NavText>
        </NavItem>
        <NavItem eventKey="profile">
          <NavIcon>
            <img
              className="eclipse"
              src={require("../images/Ellipse.png")}
              alt=""
            />
          </NavIcon>
          <NavText className="text-user">Rizal</NavText>
        </NavItem>
        <NavItem eventKey="kasir">
          <NavIcon>
            <img className="pos" src={require("../images/pos.png")} alt="" />
          </NavIcon>
          <NavText>Kasir</NavText>
        </NavItem>
        <NavItem eventKey="inventori">
          <NavIcon>
            <img
              className="inventory-icon"
              src={require("../images/inventory.png")}
              alt=""
            />
          </NavIcon>
          <NavText>Inventori</NavText>
          <NavItem eventKey="store/linechart">
            <NavIcon></NavIcon>
            <NavText style={{ fontWeight: "500", marginLeft: "37px" }}>
              Stok barang
            </NavText>
          </NavItem>
          <NavItem eventKey="store/barchart">
            <NavIcon></NavIcon>
            <NavText style={{ fontWeight: "500", marginLeft: "37px" }}>
              Faktur Pembelian
            </NavText>
          </NavItem>
          <NavItem eventKey="store/linechart">
            <NavIcon></NavIcon>
            <NavText style={{ fontWeight: "500", marginLeft: "37px" }}>
              PBF
            </NavText>
          </NavItem>
          <NavItem eventKey="store/linechart">
            <NavIcon></NavIcon>
            <NavText style={{ fontWeight: "500", marginLeft: "37px" }}>
              Stok opnam
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="setting">
          <NavIcon>
            <img
              className="pos"
              src={require("../images/setting.png")}
              alt=""
            />
          </NavIcon>
          <NavText>Pengaturan</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavbar;
