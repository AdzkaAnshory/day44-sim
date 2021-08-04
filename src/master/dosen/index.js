import React, { Component } from "react";
import { TabelDosen } from "../../component";

class Dosen extends Component {
  constructor(props) {
    super(props);
    // List Data Dosen
    this.state = { };
  }

  // Me render Data
  renderedMaster = () => {
    return (
      <TabelDosen />
    );
  };

  render() {
    return <>{this.renderedMaster()}</>;
  }
}

export default Dosen;
