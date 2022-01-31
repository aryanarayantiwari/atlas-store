import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useCart } from "react-use-cart";
const Product = ({ product }) => {
  const addItem = useCart();
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto pt-8 px-4  sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
          <div className="lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
              <img src={product.image} className="object-center object-cover" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
                <h2 id="information-heading" className="sr-only">
                  In Stock
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {product.category}
                </p>
              </div>
            </div>
            <p className="text-gray-500 mt-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus aspernatur expedita eveniet corrupti voluptatibus unde accusamus incidunt molestiae commodi?
            </p>
            <span
                className="w bg-white py-3 flex items-center justify-start text-2xl font-medium text-gray-900 shadow-sm "
              >
                ${product.price}
              </span>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 items-center">
            <div className="flex justify-around items-center">
                <h4 className="font-semibold">Size</h4>
                <div 
                className="w-10 h-10 border-2 bg-gray-800 font-semibold text-white text-md rounded-xl text-center
                 cursor-pointer hover:scale-110 flex justify-center items-center">S</div>
                                 <div 
                className="w-10 h-10 border-2 hover:bg-gray-800 font-semibold hover:text-white text-md rounded-xl text-center
                 cursor-pointer hover:scale-110 text-gray-700 flex justify-center items-center">M</div>
                                 <div 
                className="w-10 h-10 border-2 hover:bg-gray-800 font-semibold hover:text-white text-md rounded-xl text-center
                 cursor-pointer hover:scale-110 text-gray-700 flex justify-center items-center">L</div>
            </div>
              <button
                type="button"
                className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white
                 hover:bg-gray-700 focus:outline-none active:bg-red-500"
                onClick={() => {
                  addItem.addItem(product)
                }}

              >
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Product;
