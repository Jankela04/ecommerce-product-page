import React, { useState } from "react";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import cart from "./assets/icon-cart.svg";
import { useAppDispatch } from "./features/hooks";
import { addItemsToCart } from "./features/cartSlice";

function App() {
    const dispatch = useAppDispatch();

    const [itemCount, setItemCount] = useState(0);

    const incrementCount = () => {
        setItemCount(itemCount + 1);
    };

    const decrementCount = () => {
        if (itemCount === 0) return;

        setItemCount(itemCount - 1);
    };

    return (
        <div className="App">
            <Navbar />
            <div className="main">
                <ImageSlider />
                <div className="info">
                    <h3>SNEAKER COMPANY</h3>

                    <h1>Fall Limited Edition Sneakers</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corporis incidunt beatae magnam sed quis a atque
                        repudiandae rerum, consequuntur doloribus.
                    </p>
                    <div className="prices">
                        <div className="discounted">
                            <span className="bold">$125.00</span>
                            <span className="orange">50%</span>
                        </div>
                        <span className="full-price">$250.00</span>
                    </div>

                    <div className="cta">
                        <div className="btns">
                            <button
                                onClick={() => {
                                    decrementCount();
                                }}
                            >
                                -
                            </button>
                            <span>{itemCount}</span>
                            <button
                                onClick={() => {
                                    incrementCount();
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="add-to-cart-cta"
                            onClick={() => {
                                dispatch(addItemsToCart(itemCount));
                            }}
                        >
                            <img src={cart} alt="" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
