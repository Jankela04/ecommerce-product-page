/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import x from "../assets/icon-close.svg";
import useWindowDimensions from "../features/useWindowDimensions";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);

    const { width } = useWindowDimensions();

    const itemCount = 0;
    return (
        <>
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
                                    <a href="#">Collections</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">About</a>
                                    <a href="#">Contact</a>
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
                    {width < 1000 && (
                        <>
                            <img
                                className="mbl-menu"
                                onClick={() => {
                                    setNavActive(true);
                                }}
                                src={menu}
                                alt=""
                            />{" "}
                        </>
                    )}

                    <img src={logo} alt="" />
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
        </>
    );
};

export default Navbar;
