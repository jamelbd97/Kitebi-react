import React, {Component} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {faBook, faBookBookmark, faMusic, faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import BooksList from "./components/list.book.component";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto order-0 ">
                                <li className="nav-item">
                                    <Link to={"/books"} className="nav-link text-white">
                                        <FontAwesomeIcon icon={faHome}/> Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/books"} className="nav-link text-white">
                                        <FontAwesomeIcon icon={faBook}/> Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/books"} className="nav-link text-white">
                                        <FontAwesomeIcon icon={faMusic}/> Audiobooks
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/books"} className="nav-link text-white">
                                        <FontAwesomeIcon icon={faBookBookmark}/> My library
                                    </Link>
                                </li>
                            </ul>
                            <Link to={"/"} style={{verticalAlign: ""}} className="navbar-brand">
                                <h3 className="text-center my-auto">
                                    <img width={35} height={35} alt="" src="./logo.png" className="mx-3 my-auto"/>
                                    Kitebi
                                </h3>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div style={{height: 80, background: "linear-gradient(#000000DD, #00000000)"}}></div>
                <Routes>
                    <Route path="/" element={<BooksList/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;