import React from 'react'
import { FaApple } from "react-icons/fa";



function Collection() {
    return (
        <div className='grid md:grid-cols-2 gap-8 justify-center items-center p-4 bg-gray-50 '>

            <section className='bg-gray-100 text-center py-16 w-70 '>
                <img src="https://media.gettyimages.com/id/138205119/photo/two-apple-macbook-air-11-inch-laptops-session-for-photoplus-on-april-14-2011.jpg?s=612x612&w=0&k=20&c=c6ZXy6WYokr-dn738vERt7RIFhxNXSufqmolEalZv1Q=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold">Using them together sets them apart.</h2>
                <p className="text-gray-700 mt-3">Apple devices work together so seamlessly,it almost feels like magic</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Learn more</button>
            </section>
            <section className='bg-gray-100 text-center py-16'
            >
                <img src="https://media.gettyimages.com/id/2217223557/photo/washington-dc-an-ipad-pro-is-displayed-inside-of-the-apple-carnegie-library-store-on-may-30.jpg?s=612x612&w=0&k=20&c=Y8ngdvrHrAxIr2VAkOVp_muRbVKLCf-RYAe8UFQi7Uw=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold">iPad Pro</h2>
                <p className="text-gray-700 mt-3">Advanced AI performance and game-changing capabilities</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Learn more</button>

            </section>
            <section className='bg-gray-100 text-center py-16'>
                <img src="https://media.gettyimages.com/id/484583488/photo/apple-watch-38mm-stainless-steel-white-sport.jpg?s=612x612&w=0&k=20&c=H2pN0TN0zylZ3C9DzxWOcCS_Rrfgk7PsZEFYqTJngOo=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold">Watch Series 11</h2>
                <p className="text-gray-700 mt-3">The ultimate way to watch your health.</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Learn more</button>
            </section>
            <section className='bg-gray-100 text-center py-16'>
                <img src="https://media.gettyimages.com/id/2162099613/video/headphones-on-the-computer.jpg?s=640x640&k=20&c=98gKDcQ_159NZhXYLQ_Z5sD076fc6C_oYxvWOt_-r9M=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold">AirPods Pro 3</h2>
                <p className="text-gray-700 mt-3"> The world's best in-ear Active Noice Cancellation.</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Learn more</button>


            </section>
             <section className='bg-gray-100 text-center py-16 '>
                <img src="https://media.gettyimages.com/id/1434598934/photo/apple-iphone-13-pro-smartphone-with-apple-logo-on-the-screen-stands-over-us-dollar-banknotes.jpg?s=612x612&w=0&k=20&c=a3uAGWq9mjoDAaspc0yoXh0mwGXMH0Kt3fbyfF4EXAg=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold"> Trade In</h2>
                <p className="text-gray-700 mt-3">Get up to $180-$670 in credit when you trade in iPhone 13 or higher.</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Get your estimate</button>
            </section>
             <section className='bg-gray-100 text-center py-16 '>
                <img src="https://media.gettyimages.com/id/1505767346/photo/business-trip-planning-credit-card-in-hand-close-up.jpg?s=612x612&w=0&k=20&c=yPDZEnquykcpNkH3ipAv0LY53neoWQMTCT3-7WZOF-Y=" className="mx-auto rounded-lg shadow-lg mb-3" alt="" />
                <h2 className="text-3xl font-bold ">Card</h2>
                <p className="text-gray-700 mt-3">Get up to 3% Daily Cash back with every purchase.</p>
                <button className=" mt-4  bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-900 transition text-white">Learn more</button>


            </section></div>

    )
}

export default Collection