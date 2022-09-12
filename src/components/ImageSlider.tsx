import { useState } from "react";
import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";
import rightArrow from "../assets/icon-next.svg";
import leftArrow from "../assets/icon-previous.svg";
import tbn1 from "../assets/image-product-1-thumbnail.jpg";
import tbn2 from "../assets/image-product-2-thumbnail.jpg";
import tbn3 from "../assets/image-product-3-thumbnail.jpg";
import tbn4 from "../assets/image-product-4-thumbnail.jpg";

const ImageSlider = () => {
    const [isCarouselActive, setIsCarouselActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { url: img1, thumbnail: tbn1 },
        { url: img2, thumbnail: tbn2 },
        { url: img3, thumbnail: tbn3 },
        { url: img4, thumbnail: tbn4 },
    ];

    const nextImg = () => {
        currentIndex === images.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    };

    const previousImg = () => {
        currentIndex === 0
            ? setCurrentIndex(images.length - 1)
            : setCurrentIndex(currentIndex - 1);
    };

    return (
        <>
            <div className="left-side-slider">
                <div
                    className="slider"
                    style={{
                        backgroundImage: `url(${images[currentIndex].url})`,
                    }}
                >
                    <div
                        onClick={() => {
                            previousImg();
                        }}
                        className="left-arrow arrow"
                    >
                        <img src={leftArrow} alt="" />
                    </div>

                    <div
                        onClick={() => {
                            nextImg();
                        }}
                        className="right-arrow arrow"
                    >
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                <div className="thumbnail-container dsk">
                    {images.map((img, imgindex) => {
                        return (
                            <img
                                onClick={() => {
                                    setIsCarouselActive(true);
                                }}
                                src={img.thumbnail}
                                className="thumbnail"
                                key={imgindex}
                                alt=""
                            />
                        );
                    })}
                </div>
            </div>

            {isCarouselActive && (
                <div
                    onClick={() => {
                        setIsCarouselActive(false);
                    }}
                    className="desktop-carousel"
                    style={{ color: "white" }}
                >
                    OVO TREBA NAMESTITI
                </div>
            )}
        </>
    );
};

export default ImageSlider;
