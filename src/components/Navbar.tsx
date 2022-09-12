/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import x from "../assets/icon-close.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import img1 from "../assets/image-product-1-thumbnail.jpg";
import clearBtn from "../assets/icon-delete.svg";
import { clearCart } from "../features/cartSlice";

const Navbar = () => {
    const itemCartCount = useAppSelector((state) => state.itemCount.value);

    const dispatch = useAppDispatch();

    const [navActive, setNavActive] = useState(false); // for mobile
    const [cartActive, setCartActive] = useState(false);

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
                    {itemCartCount > 0 && (
                        <div className="cart-item-count">{itemCartCount}</div>
                    )}
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
                        {itemCartCount > 0 ? (
                            <>
                                <div className="cart-item">
                                    <img
                                        src={img1}
                                        className="small-img"
                                        alt="shoe"
                                    />
                                    <div className="text">
                                        <span>
                                            Fall Limited Edition Sneakers
                                        </span>
                                        <p>
                                            $125.00 x {itemCartCount}
                                            <b>${125 * itemCartCount}.00</b>
                                        </p>
                                    </div>
                                    <img
                                        onClick={() => {
                                            dispatch(clearCart());
                                        }}
                                        className="clear-btn"
                                        src={clearBtn}
                                        alt=""
                                    />
                                </div>
                                <button>Checkout</button>
                            </>
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                </div>
            )}
        </Router>
    );
};

export default Navbar;
