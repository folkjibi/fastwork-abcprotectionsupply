import React from 'react'
import { Link } from 'react-router-dom'

import IMG1 from '../assets/images/home/A0149467.jpg'
import IMG2 from '../assets/images/home/A0148264.jpg'
import IMG3 from '../assets/images/home/A0149476.jpg'
import IMG4 from '../assets/images/home/A0158296.jpg'

const products = [
    {
        id: 1,
        name: 'ไฟฉุกเฉิน LED 12V 9W',
        to: "/products",
        imageSrc: IMG1,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'สเปร์ยดับเพลิง 500 มล.',
        to: "/products",
        imageSrc: IMG2,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'ถังดับเพลิงแบบเคมีแห้งชนิดเติมได้ 10 ปอนด์',
        to: "/products",
        imageSrc: IMG3,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'เครื่องดับเพลิง ชนิดเคมีแห้ง Rating 4A5B ขนาด 10 ปอนด์',
        to: "/products",
        imageSrc: IMG4,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

const ProductsHight = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link to={product.to} className="group" key={product.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">ดูสินค้าเพิ่มเติม</button>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsHight