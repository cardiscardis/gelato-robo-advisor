import React from 'react'

export default function CtaComponent(props: {left?: boolean}) {
    
    return (
        <section className="bg-white dark:bg-gray-900">
        {props?.left ? <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full dark:hidden" src={require('../../images/gettyImages-1162928061.jpeg')} alt="dashboard image" />
                <img className="w-full hidden dark:block" src={require('../../images/Financial-advisor-111419-adobe.jpg')} alt="dashboard image" />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">🌐 Global Expertise, Personalized Guidance</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Harness the power of our advanced algorithms, backed by a team of financial experts. Our robo-advisor analyzes market trends and economic indicators in real-time to provide you with data-driven investment strategies. Say goodbye to one-size-fits-all approaches – we tailor our recommendations to your unique financial goals and risk tolerance.</p>
                    <button className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div> : 
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">🤖 AI-Powered Precision for Optimal Returns</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Our state-of-the-art artificial intelligence is at the heart of our robo-advisor. It continuously learns and adapts to market changes, ensuring your portfolio stays optimized for maximum returns. Enjoy the benefits of a fully automated investment process without sacrificing the human touch.</p>
                    <a href="#" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                <img className="w-full dark:hidden" src={require('../../images/Financial-advisor-111419-adobe.jpg')} alt="dashboard image" />
                <img className="w-full hidden dark:block" src={require("../../images/gettyImages-1162928061.jpeg")} alt="dashboard image" />
            </div>}
        </section>
    )
}