import React, { Component } from "react";

//IMPORT COMPONENT
import SideNav from "../components/SideNav";
import StokBarang from "../components/StokBarang";

class Home extends Component {
  //SIDENAV

  render() {
    return (
      <div>
        <SideNav state={this.state} />
        <StokBarang />
      </div>
    );
  }
}

export default Home;
