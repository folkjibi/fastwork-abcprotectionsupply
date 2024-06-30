import React from 'react';

// image
import BannerMain from '../assets/images/banners/BannerHome.jpg'

const Banner = () => {
    const bannerSection = [
        {
            id: "slide1",
            Image: BannerMain,
            ImageLink: "https://placehold.co/1920x570"
        },
        {
            id: "slide2",
            Image: BannerMain,
            ImageLink: "https://placehold.co/1920x570"
        },
        {
            id: "slide3",
            Image: BannerMain,
            ImageLink: "https://placehold.co/1920x570"
        }
    ]

    return (
        <div className="carousel w-full mt-20">
            {bannerSection.map ((image, index) => {
                return (
                    <div id={image.id} className="carousel-item relative w-full" key={index}>
                        <img src={image.ImageLink} className="w-full" alt="Banner 1"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Banner