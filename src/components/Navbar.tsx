/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import x from "../assets/icon-close.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false); // for mobile
    const [cartActive, setCartActive] = useState(false);

    const itemCount = 0;
    return (
        <Router>
            <div className="navbar">
                <div className="left-side-nav">
                    {navActive && (
                        <>
                            <div className="side-nav">
                                <div className="side-nav-items">
                                    <img
                                        src={x}
                                        onClick={() => {
                                            setNavActive(false);
                                        }}
                                        alt=""
                                    />
                                    <Link to="/">Collections</Link>
                                    <Link to="/">Men</Link>
                                    <Link to="/">Women</Link>
                                    <Link to="/">About</Link>
                                    <Link to="/">Contact</Link>
                                </div>
                            </div>
                            <div
                                className="black"
                                onClick={() => {
                                    setNavActive(false);
                                }}
                            ></div>
                        </>
                    )}
                    <img
                        className="mbl-menu-icon"
                        onClick={() => {
                            setNavActive(true);
                        }}
                        src={menu}
                        alt=""
                    />
                    <img src={logo} alt="" />
                    <div className="desktop-nav-items">
                        <Link className="dsk-item" to="/">
                            Collections
                        </Link>
                        <Link className="dsk-item" to="/">
                            Men
                        </Link>
                        <Link className="dsk-item" to="/">
                            Women
                        </Link>
                        <Link className="dsk-item" to="/">
                            About
                        </Link>
                        <Link className="dsk-item" to="/">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="right-side-nav">
                    <img
                        src={cart}
                        onClick={() => {
                            setCartActive(!cartActive);
                        }}
                        alt=""
                    />
                    <img src={avatar} alt="" className="avatar" />
                </div>
            </div>

            {cartActive && (
                <div className="cart">
                    <span>Cart</span>
                    <div className="line-break"></div>
                    <div className="cart-items">
                        {itemCount > 0 ? (
                            <>Your Item</>
                        ) : (
                            <p> Your Cart is empty.</p>
                        )}
                    </div>
                </div>
            )}
        </Router>
    );
};

export default Navbar;
