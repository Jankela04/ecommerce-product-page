import React from "react";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import cart from "./assets/icon-cart.svg";
import useWindowDimensions from "./features/useWindowDimensions";

function App() {
    const { width } = useWindowDimensions();

    const count = 0;
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
                            <button>-</button>
                            <span>{count}</span>
                            <button>+</button>
                        </div>
                        <button className="add-to-cart-cta">
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
