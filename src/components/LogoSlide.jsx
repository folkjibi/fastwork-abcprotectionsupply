import React from 'react'
import { customLeft, customRight } from '../data/logoDB'

const LogoSlide = () => {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="whitespace-nowrap">
                    <div className="inline-block animate-marqueeRight">
                        {/* loop ข้อมูลออกมา เพื่อแสดงหน้าเว็บไซต์ */}
                        {customLeft.map((logoRight, logo) => (
                            <div className="inline-block animate-marquee" key={logo}>
                                <img src={logoRight.src} alt={logoRight.alt} width={logoRight.width} height={logoRight.height} className="mx-4 inline-block h-1/6" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="whitespace-nowrap mt-4">
                    <div className="inline-block animate-marqueeLeft">
                        {/* loop ข้อมูลออกมา เพื่อแสดงหน้าเว็บไซต์ */}
                        {customRight.map((logoLeft, logo) => (
                            <div className="inline-block animate-marquee" key={logo}>
                                <img src={logoLeft.src} alt={logoLeft.alt} width={logoLeft.width} height={logoLeft.height} className="mx-4 inline-block h-1/6" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSlide