import React, { Component } from 'react';
import TabelSks from '../../component/tabel-sks';


class MasterSKS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderedMaster= () =>{
        return( 
            <TabelSks/>
            )
    }

    render() { 
        return ( 
            <>
            {this.renderedMaster()}
            </>
         );
    }
}
 
export default MasterSKS;