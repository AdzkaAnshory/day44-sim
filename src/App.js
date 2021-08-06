import React, { Component } from 'react';
import {Body, Header, Nav} from "./template";
import { BrowserRouter as Router } from "react-router-dom"
import { Login } from './page'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "login"
        }
    }

    setPage = page => this.setState({ page: page ? page : "login" })

    renderedPage =()=>{
        const { page } = this.state
        // if(this.state.page === "login"){return(<>
        //             <Login setPage={this.setPage}/>
        //         </>)}
        return (
            <>
                <Router>
                    <Header></Header>
                    <Nav currentPage={page} />
                    <Body currentPage={page} />
                </Router>
            </>
        );
    }

    render() {
        return (
            <>
            {this.renderedPage()}
            </>
        );
    }
}

export default App;

/**
 -pendaftaran mahasiswa
    -form create
 -penerimaan mahasiswa
    -list penerimaan dr pendaftaran/mahasiswa masuk/resmi
 -master/penilaian mahasiswa
    -list
        -column
         -id
         -nama
         -NIM
         -jurusan
         -strata
         -IPK
         -jumlah SKS
 -master dosen
    -list
        -column
         -id
         -nama
         -NID
         -jurusan
 -master jurusan
    -list
        -column
         -id
         -nama jurusan
 -master SKS
    -list
        -column
         -id
         -nama mata kuliah
         -jumlah sks
         -jurusan mata kuliah

 */