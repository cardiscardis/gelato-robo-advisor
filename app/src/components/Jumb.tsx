import React from "react";
import Range from "../components/Range";
import Barchart from "./chart/Barchart";


export default function JumbWithCards() {
    const [ data, setData ] = React.useState<any>([])
    console.log('jumbParent', data)
    return (
        <>   
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    {/* <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                        </svg>
                        Tutorial
                    </a> */}
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Drag slider to select your risk tolerance here</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Risk tolerance is an individual's ability and willingness to handle investment fluctuations without stress. It involves assessing financial capacity, time horizon, and comfort with potential losses. It varies among individuals, leading to different risk profiles. Regular assessments are essential as risk tolerance may change. Understanding and aligning with one's risk tolerance helps create a suitable investment portfolio.</p>
                    {/* <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Read more
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                    <br />
                    <Range setData={setData} />
                    <br />
                    <Barchart data={data} />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <p className="bg-green-100 text-green-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                            </svg>
                            Investment Score
                        </p>
                        <h2 className="text-gray-900 dark:text-white text-6xl font-extrabold mb-2">Your Risk Factor: {data && data?.Risk_Factor}</h2>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <p className="bg-purple-100 text-purple-800 text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                            </svg>
                            Calculator %
                        </p>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Nigerian Bonds: {data?.Nigerian_Bonds}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Alternative: {data?.Alternative}</h2>                        
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Commodities: {data?.Commodities}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Emerging Stocks: {data?.Emerging_Stocks}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Foriegn Bonds: {data?.Foriegn_Bonds}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Foriegn Stocks: {data?.Foriegn_Stocks}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Nigerian Stocks: {data?.Nigerian_Stocks}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Real Estate: {data?.Real_Estate}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">T Bills: {data?.T_Bills}</h2>
                        <h2 className="text-gray-900 dark:text-white font-extrabold mb-2">Tech Stocks: {data?.Tech_Stocks}</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}