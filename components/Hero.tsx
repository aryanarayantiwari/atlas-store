import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <div>
            <main className="mt-8 mx-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className=" text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Amazing developer wearables</span>{' '}
              </h1>
              <p className="mt-6 text-gray-500 text-xl text-center mx-auto max-w-lg md:max-w-5xl"> 
                Get your favorite developer tee, hat, hoodie etc. that you have been searching for 
                at the best price possible and show it off to your friends. 
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center ">
                <div className="rounded-md shadow">
                  <a
                    href="#allproducts"
                    className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}

export default Hero
