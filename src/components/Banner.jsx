import React from 'react';

// image
import Banner1 from '../assets/images/banners/banner_1.jpg'

const Banner = () => {
    const bannerSection = [
        {
            Image: Banner1,
        },
        {
            Image: Banner1,
        },
        {
            Image: Banner1,
        }
    ]

    return (
        <div className="carousel w-full mt-20">
            {bannerSection.map ((image, index) => {
                return (
                    <div id="slide1" className="carousel-item relative w-full" key={index}>
                        <img src={image.Image} className="w-full" alt="Banner 1"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Banner