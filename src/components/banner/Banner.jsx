import React from 'react';

// image
import BannerMain from '../../assets/images/banners/BannerHome-1.jpg'
import BannerSec from '../../assets/images/banners/BannerHome-2.jpg'
import BannerThi from '../../assets/images/banners/BannerHome-3.jpg'

const Banner = () => {
    const bannerSection = [
        {
            id: "slide1",
            Image: BannerMain,
            alt: "Banner1"
        },
        {
            id: "slide2",
            Image: BannerSec,
            alt: "Banner2"
        },
        {
            id: "slide3",
            Image: BannerThi,
            alt: "Banner3"
        }
    ]

    return (
        <div className="carousel w-full mt-20">
            {bannerSection.map ((image, index) => {
                return (
                    <div id={image.id} className="carousel-item relative w-full" key={index}>
                        <img src={image.Image} className="w-full" alt={image.alt} />
                    </div>
                )
            })}
        </div>
    )
}

export default Banner