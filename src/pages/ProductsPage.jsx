import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// react icons
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

// images
import IMG1 from '../assets/images/home/A0149467.jpg'
import IMG2 from '../assets/images/home/A0148264.jpg'
import IMG3 from '../assets/images/home/A0149476.jpg'
import IMG4 from '../assets/images/home/A0158296.jpg'

const subCategories = [
    { name: 'ถังดับเพลิง', href: '#' },
    { name: 'ไฟฉุกเฉิน', href: '#' },
    { name: 'ป้ายไฟฉุกเฉิน', href: '#' },
    { name: 'อุปกรณ์จราจร', href: '#' },
    { name: 'accessory', href: '#' },
]

const filters = [
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

const products = [
    {
        id: 1,
        name: 'ไฟฉุกเฉิน LED 12V 9W',
        category: 'ไฟฉุกเฉิน',
        size: '12l',
        to: "/products",
        price: '$48',
        imageSrc: IMG1,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'สเปร์ยดับเพลิง 500 มล.',
        category: 'accessory',
        size: '6l',
        to: "/products",
        price: '$35',
        imageSrc: IMG3,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'ถังดับเพลิงแบบเคมีแห้งชนิดเติมได้ 10 ปอนด์',
        category: 'ถังดับเพลิง',
        size: '20l',
        to: "/products",
        price: '$89',
        imageSrc: IMG2,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'เครื่องดับเพลิง ชนิดเคมีแห้ง Rating 4A5B ขนาด 10 ปอนด์',
        category: 'ถังดับเพลิง',
        size: '40l',
        to: "/products",
        price: '$35',
        imageSrc: IMG4,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductsPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [selectedSizes, setSelectedSizes] = useState(new Set())

    const handleSubCategoryChange = (category) => {
        setSelectedSubCategory(category === selectedSubCategory ? null : category)
        setMobileFiltersOpen(false)
    }

    const handleSizeChange = (size) => {
        const newSizes = new Set(selectedSizes)
        if (newSizes.has(size)) {
            newSizes.delete(size)
        } else {
            newSizes.add(size)
        }
        setSelectedSizes(newSizes)
        setMobileFiltersOpen(false)
    }

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedSubCategory ? product.category === selectedSubCategory : true
        const sizeMatch = selectedSizes.size > 0 ? selectedSizes.has(product.size) : true
        return categoryMatch && sizeMatch
    })

    return (
        <section className="pt-12">
            <div>
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel transition className="relative ml-auto flex w-full h-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" onClick={() => setMobileFiltersOpen(false)} className="mr-2 flex w-10 h-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                                </button>
                            </div>

                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <button type="button" className="block px-2 py-3" onClick={() => handleSubCategoryChange(category.name)}>
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="w-5 h-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={selectedSizes.has(option.value)}
                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                            type="checkbox"
                                                            className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            onChange={() => handleSizeChange(option.value)}
                                                        />
                                                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-500">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Product</h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">Product</h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <button type="button" onClick={() => handleSubCategoryChange(category.name)}>{category.name}</button>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={selectedSizes.has(option.value)}
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            onChange={() => handleSizeChange(option.value)}
                                                        />
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* Your content */}
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {filteredProducts.map((product) => (
                                        <Link to={product.to} className="group" key={product.id}>
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">ดูรายละเอียดเพิ่มเติม</button>
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    )
}

export default ProductsPage
