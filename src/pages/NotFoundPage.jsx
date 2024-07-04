import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    ไม่พบหน้าที่ต้องการ
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        กลับไปหน้าแรก
                    </Link>
                    <a href="https://www.facebook.com/profile.php?id=100090972997816&mibextid=LQQJ4d" target="_blank" className="text-sm font-semibold text-secondary">
                        ติดต่อฝ่ายสนับสนุน <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage