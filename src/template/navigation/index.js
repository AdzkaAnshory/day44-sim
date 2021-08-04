import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
        const {currentPage} = this.props
        return (
            <div className="nav-container">
                <div className="logo" >
                    <img style={{width: 50, marginLeft: 10}} src="https://www.pngfind.com/pngs/m/595-5951984_broken-shield-icon-png-transparent-png.png" alt=""/>
                </div>
                <div className="menu">
                  <Link to="/login">
                    <div className={`menu-item ${currentPage === "login" ? "active" : ""}`}>Login</div>
                  </Link>
                  <Link to="/sks">
                    <div className={`menu-item ${currentPage === "sks" ? "active" : ""}`}>SKS</div>
                  </Link>
                  <Link to="/form">
                    <div className={`menu-item ${currentPage === "form" ? "active" : ""}`}>Form</div>
                  </Link>
                  <Link to="/list-dosen">
                    <div className={`menu-item ${currentPage === "list-dosen" ? "active" : ""}`}>List Data Dosen</div>
                  </Link>
                  <Link to="/list-jurusan">
                    <div className={`menu-item ${currentPage === "list-jurusan" ? "active" : ""}`}>List Jurusan</div>
                  </Link>
                  <Link to="/penerimaan">
                    <div className={`menu-item ${currentPage === "penerimaan" ? "active" : ""}`}>List Penerimaan</div>
                  </Link>
                  <Link to="/list-mahasiswa">
                    <div className={`menu-item ${currentPage === "list-mahasiswa" ? "active" : ""}`}>List Penilaian Mahasiswa</div>
                  </Link>

                </div>
            </div>
        );
    }
}

export default Nav;
