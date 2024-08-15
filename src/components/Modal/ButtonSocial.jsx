import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const social = [
    {
        link: "https://www.facebook.com/profile.php?id=100090972997816",
        name: "Facebook",
        description: "A.B.C. Protection Supply",
    },
    {
        link: "https://line.me/R/ti/p/@424zlrnf?ts=05311443&oat_content=url",
        name: "LINE",
        description: "ABCProtection Supply",
    },
    {
        link: "mailto:abc765protectionsupply@gmail.com",
        name: "Email",
        description: "abc765protectionsupply@gmail.com",
    },
]

const ButtonSocial = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={openModal}
                className="text-white inline-flex justify-center bg-primary hover:bg-primary/80 font-medium rounded-lg text-sm px-5 py-2 text-center"
                type="button"
            >
                สนใจสินค้า
            </button>

            {isOpen && (
                <div id="select-modal" tabIndex="-1" aria-hidden={!isOpen} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ช่องทางการติดต่อ</h3>
                                <button type="button" onClick={closeModal} className="closeBtn" data-modal-toggle="select-modal">
                                    <IoClose size={20} />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* modal body */}
                            <div className="p-4 md:p-5">
                                <p className="text-gray-500 dark:text-gray-400 mb-4">
                                    เลือกช่องทางโซเซียลมีเดีย
                                </p>
                                <ul className="space-y-4 mb-4">
                                    {social.map((sc, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={sc.link} target="_blank" className="labelBtnSci">
                                                    <div className="block">
                                                        <div className="w-full text-lg font-semibold">{sc.name}</div>
                                                        <div className="w-full text-gray-500 dark:text-gray-400">{sc.description}</div>
                                                    </div>
                                                    <FaArrowRightLong />
                                                </Link>
                                            </li>
                                        )
                                    })}
                                    {/* <li>
                                        <Link to="" target="_blank" className="labelBtnSci">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Facebook</div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    A.B.C. Protection Supply
                                                </div>
                                            </div>
                                            <FaArrowRightLong />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" className="labelBtnSci">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    UI/UX Engineer
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    Flowbite
                                                </div>
                                            </div>
                                            <FaArrowRightLong />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" target="_blank" className="labelBtnSci">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    UI/UX Engineer
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    Flowbite
                                                </div>
                                            </div>
                                            <FaArrowRightLong />
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonSocial;
