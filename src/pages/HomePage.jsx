import React from 'react'
import Banner from '../components/Banner'
import ProductsHight from '../components/ProductsHight'

// icons
import { FaFacebook, FaLine } from 'react-icons/fa'

// Image
import BannerBT1 from '../assets/images/banners/40Year.jpg'
import BannerBT2 from '../assets/images/banners/FLEXI.jpg'

const HomePage = () => {

    return (
        <section>
            {/* Banner Section */}
            <div className="bg-background">
                <Banner />
            </div>

            {/* Product highlights Section */}
            <div className="mt-10">
                <h2 className="text-3xl text-center font-bold">สินค้าไฮไลท์</h2>
                <ProductsHight />
            </div>

            {/* banner duo section */}
            <div className="text-gray-600 body-font">
                <div className="container px-5 pt-10 mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg w-full h-full overflow-hidden">
                                <img src={BannerBT1} alt="content" className="object-cover object-center w-full h-full" />
                            </div>
                        </div>

                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg w-full h-full overflow-hidden">
                                <img src={BannerBT2} alt="content" className="object-cover object-center h-full w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* buttons section */}
            <div className="flex items-center justify-center select-none font-mono mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="btn btn-wide bg-green-500 hover:bg-green-400 text-white">
                        <a href="https://lin.ee/XRRja2d" target="_blank" className="flex flex-row items-center space-x-4">
                            <FaLine className="text-2xl" />
                            <div className="flex flex-col">
                                <span>แชทแล้วช้อป ง่ายนิดเดียว</span>
                                <span>คลิกเลย</span>
                            </div>
                        </a>
                    </button>

                    <button className="btn btn-wide bg-blue-700 hover:bg-blue-500 text-white">
                        <a href="https://www.facebook.com/profile.php?id=100090972997816&mibextid=LQQJ4d" target="_blank" className="flex flex-row items-center space-x-4">
                            <FaFacebook className="text-2xl" />
                            <span>รับโปรโมชั่นพิเศษก่อนใคร</span>
                        </a>
                    </button>
                </div>
            </div>

            {/* content section */}
            <div className="mt-10"></div>
        </section>
    )
}

export default HomePage