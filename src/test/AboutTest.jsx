import React from 'react'
import { Link } from 'react-router-dom'

// images
import PlaceholderMain from '../assets/images/placeholder.png'
import Placeholder_1 from '../assets/images/placeholder1.png'
import Segment from '../assets/images/segment.png'
import TestImage from '../assets/images/mock/testImage.jpg'

const AboutTest = () => {
    return (
        <section className="max-w-8xl mx-auto pt-28">
            <div className="w-full text-black">
                <div className="text-center font-bold text-4xl my-14 md:my-8">
                    <h2>เกี่ยวกับเรา</h2>
                </div>
                
                <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
                    <div className="lg:w-3/6">
                        <h2 className="max-w-xl lg:text-[3.5em] text-4xl font-bold leading-none text-black inline-block">
                            Vel quis feugiat pharetra diam.
                        </h2>

                        <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
                            Lorem ipsum urna, consectetur adipiscing elit. Urna risus
                            hendrerit dignissim duis fringilla sit. Lacus porttitor neque
                            ipsum.
                        </p>
                    </div>
                    <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
                        <img src={TestImage} alt="Hero" />
                    </div>
                    <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
                        <img src={TestImage} alt="image" />
                    </div>
                </div>

                <div className="mt-0 bg-white lg:mt-40">
                    <div className="mx-auto">
                        <div className="mx-auto px-5 py-24 lg:px-24">
                            <div className="my-10 flex w-full flex-col text-center">
                                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                                    ลูกค้าของเรา
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-black">
                        <div className=" max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
                            <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                                    Sem enim cursus orci at.
                                </h2>
                                <p className="mb-4 text-lg leading-relaxed">
                                    In ullamcorper magna nunc, non molestie augue feugiat eget.
                                    Mauris, vitae et, vitae et cursus amet tincidunt feugiat
                                    nulla. Senectus maecenas diam risus sodales dictum eu. Eget
                                    cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus
                                    vel laoreet.
                                </p>
                                <Link to="/" className="underline-blue font-semibold">
                                    Learn more
                                </Link>
                            </div>
                            <img className="lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block  lg:w-4/6" src={PlaceholderMain} alt="img" />
                            <img className="mb-24 inline-block w-5/6 rounded object-cover object-center lg:hidden lg:w-4/6" src={PlaceholderMain} alt="img" />
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
                    <div className="my-3 flex w-full flex-col text-left lg:text-center">
                        <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
                            Lorem ipsum elit sit unar,{" "}
                        <br className="hidden lg:inline-block" />
                            consectetur adipiscing elit.
                        </h2>
                    </div>
                    <div className="flex w-full flex-col text-left lg:text-center">
                        <h3 className="text-2xl text-black">
                            Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
                            pellentesque <br className="hidden lg:inline-block" />
                            tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
                            ac mus. Arcu quis feugiat.
                        </h3>
                    </div>
                </div>

                <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
                    <img src={PlaceholderMain} alt="img" />
                </div>

                <div className="bg-white text-black">
                    <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
                        <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start md:pr-16 lg:pr-6">
                            <h2 className="mb-4 text-2xl font-bold leading-none sm:text-4xl">
                                Bibendum tortor et sit convallis nec morbi.
                            </h2>
                            <p className="font-3xl mb-8 font-semibold leading-relaxed">
                                Lorem ipsum auctor sit amet, consectetur adipiscing elit. Sit a
                                egestas tortor viverra nisl, in non. Neque viverra sollicitudin
                                amet volutpat auctor amet. Aliquam pellentesque condimentum
                                mauris sit tincidunt egestas ullamcorper sit.{" "}
                            </p>
                        </div>
                        <div className="lg:w-full lg:max-w-2xl">
                            <img src={PlaceholderMain} alt="img" />
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
                            <div className="my-6 flex w-full flex-col text-left lg:text-center">
                                <h3 className="mb-8 text-5xl font-bold text-black">
                                    Dui tellus quis magna id ultricies eu sed.
                                </h3>
                                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                                    Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                                    Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                                    accumsan arcu, aenean viverra penatibus quis. Laoreet.
                                </h3>
                            </div>
                            <img src={PlaceholderMain} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTest