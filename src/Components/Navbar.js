import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbarr">
                <Link to="/" style={{textDecoration:'none'}}><h1>Movies</h1></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'0.5rem'}}>Favourites</h2></Link>
            </div>
        )
    }
}
