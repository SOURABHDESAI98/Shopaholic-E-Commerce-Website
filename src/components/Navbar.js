import React from 'react'
import { NavLink } from 'react-router-dom'
import "./css/home.css"
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from "@auth0/auth0-react";

//TODO: paste domain host url in auth0 website in order to use login/logout functionality after production and hosting.

export default function Navbar() {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const { total_item } = useCartContext();



    return (

        <div>



            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to="/">SHOPAHOLIC</NavLink>
                    <button style={{ backgroundColor: "white", borderRadius: "10px" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li id="xyz" className="nav-item">
                                <NavLink className="nav-link text-light" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light " to="/contact" >Contact</NavLink>
                            </li>

                            <li className="nav-item text-light">
                                <NavLink className="nav-link " to="/cart" ><i className="bi bi-cart text-light"></i><span className='text-warning' >{total_item}</span></NavLink>
                            </li>
                            <li className="nav-item text-light">
                                {
                                    isAuthenticated ? <button style={{ padding: "0.5rem" }} id="login" className="nav-link btn btn-primary text-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Log Out</button> :
                                        <button style={{ padding: "0.5rem" }} id="login" className="nav-link btn btn-primary text-light" onClick={() => loginWithRedirect()} >Log In</button>

                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <div className='container mt-4'>

                <div className='p-4'>
                    <h1 id="logo"><span>S</span><span>H</span><span>O</span><span>P</span><span>A</span><span>H</span><span>O</span>
                        <span>L</span><span>I</span><span>C</span>
                    </h1>
                    <h3 id="logo-comment"> "heaven for shopping addicts"  </h3>

                </div>

            </div>

        </div>

    );
}











