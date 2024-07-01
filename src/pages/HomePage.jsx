import React from 'react'
import Banner from '../components/Banner'
import ProductsHight from '../components/ProductsHight'

// icons
import { FaFacebook, FaLine } from 'react-icons/fa'

// Image
import Home1 from '../assets/images/home/BannerHome-1.jpg'
import Home2 from '../assets/images/home/BannerHome-2.jpg'

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
                                <img src={Home1} alt="content" className="object-cover object-center w-full h-full" />
                            </div>
                        </div>

                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg w-full h-full overflow-hidden">
                                <img src={Home2} alt="content" className="object-cover object-center h-full w-full" />
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
            <div className="container mx-auto mt-12 text-black">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">
                        เอ.บี.ซี.โปรเท็คชั่น ผู้นำด้านอุปกรณ์เซฟตี้ ถังดับเพลิง ไฟฉุกเฉิน อุปกรณ์จราจร สำหรับทุกธุรกิจ
                    </h2>
                    <span className="font-bold">
                        ถังดับเพลิง ไฟฉุกเฉิน อุปกรณ์จราจร อุปกรณ์ความปลอดภัย บริการจัดการสินค้า และรับงานสั่งทำ
                    </span>
                </div>

                <div>
                    <p className="text-gray-500 text-center font-medium mb-4">
                        เอ.บี.ซี.โปรเท็คชั่น ครบครัยวินค้าอุปกรณ์ความปลอดถัยเป็นผู้นำด้านการ จำหน่ายและส่งออกอุปกรณ์ความปลอดภัย แบรนด์คุณภาพมี <br />
                        มีความหลากหลายมากที่สุดของประเทศ พร้อมบริการจากผู้เชี่ยวชาญในการให้คำแนะนำการเลือกใช้สินค้าให้เหมาะสมกับการใช้งานในแต่ละธุรกิจ <br />
                        บริการจัดหาสินค้าอุตสาหกรรมทุกชนิด มีบริการขึ้นแบบภาพงาน 3D Sketch ที่ช่วยออกแบบพื้นที่การใช้งาน เพื่อจัดวางอุปกรณ์และวาง <br />
                        แผนการใช้พื้นที่ให้คุ้มค่าที่สุด และอุ่นใจด้วยบริการหลังการขายแบบมืออาชีพ ที่ช่วยให้ทุกการจัดซื้อเป็นเรื่องง่าย ให้เอ.บี.ซี. โปรเท็คชั่นดูแลคุณ
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePage