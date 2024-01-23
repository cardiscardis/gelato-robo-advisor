import React from "react"
import img1 from '../images/photo-of-happy-male-that-blends-with-purple-theme-upscaled.jpg'
import img2 from '../images/photo-of-happy-female-that-blends-with-purple-them-upscaled (3).jpg'
import img3 from '../images/multicolor-background-happy-male-and-female-photo-upscaled.jpg'
import img4 from '../images/wepik-export-2024.png'

export default function() {
    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        <div className="absolute block w-40 md:w-80 top-10 md:top-4 left-4 md:left-20">
                            <img src={img4} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        <div className="absolute block w-80 left-2 md:left-10 top-1/4 md:top-0">
                            <ul>
                                <li className="text-2xl md:text-6xl font-bold text-white drop-shadow-lg shadow-black">{/*text-4xl font-thin text-yellow-500 leading-9 tracking-wider">{/**text-xl font-normal text-pink-500 leading-6 tracking-tighter */}
                                    Simplifying your investment
                                </li>
                                <li className="bg-gradient-to-r from-white p-2 md:p-4">
                                    <p className="text-xl font-normal text-pink-800 drop-shadow-lg leading-6 tracking-tighterr">
                                        We give Personalized investment strategies and Cost-effective solutions
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        <div className="absolute block w-80 top-1/2 left-4 md:left-20">
                            <ul>
                                <li className="text-4xl font-bold text-yellow-500 drop-shadow-lg shadow-black">{/*text-4xl font-thin text-yellow-500 leading-9 tracking-wider">{/**text-xl font-normal text-pink-500 leading-6 tracking-tighter */}
                                    Get Started Now...
                                </li>
                                <li className="bg-gradient-to-r from-gray-800 p-4">
                                    <p className="text-xl font-normal text-white drop-shadow-lg leading-6 tracking-tighterr">
                                    &copy; Special offers reserved...
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}



