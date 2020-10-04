import React, { Component } from "react";

//IMPORT COMPONENT
import SideNav from "../components/SideNav";
import StokBarang from "../components/StokBarang";

class Home extends Component {
  state = {
    value: "default",
    margin: "90px",
    minWidth: "0px",
    display: "none",
    openPpn: "true",
    openDiskon: "true",
  };

  //NAVSIDE
  statusExpand = (e) => {
    if (this.state.value === "default") {
      this.setState({
        value: "expand",
        margin: "219px",
        minWidth: "200px",
        display: "none",
      });
    } else {
      this.setState({
        value: "default",
        margin: "90px",
        minWidth: "20px",
        display: "inline-block",
      });
      console.log("asa");
      console.log(this.minWidth);
    }
  };

  //PPN COLLAPSE
  handleChange = (e) => {
    this.setState({ openPpn: e.target.value });
  };

  //DISKON PEMBAYARAN TUNAI COLLAPSE
  handleChangeDiskon = (e) => {
    this.setState({ openDiskon: e.target.value });
  };

  render() {
    return (
      <div>
        <SideNav
          display={this.state.display}
          status={this.state.value}
          statusExpand={this.statusExpand}
          minWidth={this.state.minWidth}
        />
        <StokBarang
          margin={this.state.margin}
          openPpn={this.state.openPpn}
          onChange={this.handleChange}
          openDiskon={this.state.openDiskon}
          onChangeDiskon={this.handleChangeDiskon}
        />
      </div>
    );
  }
}

export default Home;
