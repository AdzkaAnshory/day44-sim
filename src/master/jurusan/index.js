import React, { Component } from "react";
import { TabelJurusan } from "../../component";

class MasterSKS extends Component {
  constructor(props) {
    super(props);
    // List Data Jurusan
    this.state = {
      
    };
  }


  // Me renderData
  renderedMaster = () => {
    return (
      <TabelJurusan />
    );
  };

  render() {
    return <>{this.renderedMaster()}</>;
  }
}

export default MasterSKS;
