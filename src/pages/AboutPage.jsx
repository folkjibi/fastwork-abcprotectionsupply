import React from 'react'
import Customer from '../components/LogoSlide'

// images
import BannerAbout from '../assets/images/about/Bannerabout.jpg'

const AboutPage = () => {
    
    return (
        <section className="text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full my-10">
                    <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1">เกี่ยวกับเรา</h2>
                    <h1 className="text-2xl sm:text-3xl font-bold title-font mb-4 text-gray-900">เอ.บี.ซี. โปรเท็คชั่น ซัพพลาย</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        เป็นผู้นำเข้าและจัดจำหน่ายอุปกรณ์ความปลอดภัย ถังดับเพลิง สายดับเพลิง อุปกรณ์ดับเพลิง อุปกรณ์จราจร ไฟฉุกเฉิน ทั้งภายนอก และภายในอาคาร และให้บริการมากกว่า 30 ปี เป็นสินค้าที่ผลิตภายในประเทศ และต่างประเทศ ซึ่งได้รับมาตรฐานอุตสาหกรรม มอก.322-2537 และสินค้านำเข้ามาตรฐานสากลต่างๆ ไม่ว่าจะเป็น CE, UL, FM, APPROVED, DIN NFPA, EN และอื่นๆ และให้ได้เลือกสรร อีกทั้งยังเป็นผู้ให้บริการตรวจเช็คสภาพอุปกรณ์ดับเพลิงที่มีอายุการใช้งานนานแล้ว แต่ขาดการตรวจสภาพ รับให้คำปรึกษาด้านการติดตั้งอุปกรณ์ ความปลอดภัยต่างๆ ทั้งนี้เรายังมีทีมงานที่มีความชำนาญด้านความปลอดภัย สามารถอบรมให้ความรู้ความเข้าใจเกี่ยวกับใช้งานอุปกรณ์อย่างถูกต้อง และปฎิบัติงานอย่างมืออาชีพ เอ.บี.ซี. โปรเท็คชั่น ซัพพลาย จะมุ่งมั่นพัฒนาการให้บริการและปรับปรุงมาตรฐานต่างๆยิ่งๆขึ้นไปเพื่อรองรับความต้องการของลูกค้าทุกท่าน และก้าวสู่ความเป็นผู้นำ ด้านความปลอดภัยต่อไป
                    </p>
                </div>
            </div>

            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
                    <img src={BannerAbout} alt="Image" className="w-full object-cover object-center rounded" />
                </div>
            </div>

            <div className="">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">ลูกค้าของเรา</h2>
                <Customer />
            </div>
        </section>
    )
}

export default AboutPage