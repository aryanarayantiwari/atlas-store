import React from "react";
import { useCart } from "react-use-cart";
import { ShoppingBagIcon,SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Link from "next/link";
const cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  if (isEmpty) {
    return (
      <>
      <header className='flex justify-between my-2 py-4 border-b items-center border-gray-300 w-full'>
            <Link href="/"><h1 className=' cursor-pointer text-2xl font-bold hover:text-red-400 ml-5'>Atlas Store</h1></Link>
            <Link href='/cart'>
                <div className='relative mr-5'>
                    <div className="rounded flex justify-center items-center -top-2 right-3 z-10 text-white font-semibold absolute bg-red-500 w-4 h-4 text-xs">
                    {totalUniqueItems}
                    </div>
                <ShoppingCartIcon className='relative cursor-pointer w-6 h-6 mx-4 hover:text-red-400'/>
                </div>
            </Link>
        </header>
          <h2 className="font-extrabold my-24 text-4xl text-gray-700 text-center">Your Cart is Empty</h2>
          <Link href="/">
              <h2 className="flex items-center justify-center font-bold text-indigo-600 text-2xl cursor-pointer ">
              Continue Shopping
              <ShoppingBagIcon className="w-7 h-7 mt-1 text-red-500"/>
              </h2>
          </Link>
      </>
    );
  } else {
    return (
      <div className=" overflow-visible">
        <header className='flex justify-between my-2 py-4 border-b items-center border-gray-300 w-full'>
            <Link href="/"><h1 className=' cursor-pointer text-2xl font-bold hover:text-red-400 ml-5'>Atlas Store</h1></Link>
            <Link href='/cart'>
                <div className='relative mr-5'>
                    <div className="rounded flex justify-center items-center -top-2 right-3 z-10 text-white font-semibold absolute bg-red-500 w-4 h-4 text-xs">
                    {totalUniqueItems}
                    </div>
                <ShoppingCartIcon className='relative cursor-pointer w-6 h-6 mx-4 hover:text-red-400'/>
                </div>
            </Link>
        </header>
        <h2 className="text-center font-bold text-2xl -mb-5">Your Cart</h2>
        <div className="mt-8 flex justify-center items-center">
          
          <div className="flex">
            <ul role="list" className=" divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="py-6 flex w-full">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.href}>{item.name}</a>
                        </h3>
                        <p className="ml-4">${item.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex-1 flex w-64 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {item.quantity}</p>

                      <div className="flex justify-between items-center">
                      <button
                          type="button"
                          className="font-medium h-5 w-5 text-white active:bg-indigo-600 bg-red-500 rounded-md  flex justify-center items-center ml-8 text-lg"
                          onClick={() => (updateItemQuantity(item.id, item.quantity + 1))}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="font-medium h-5 w-5 text-white active:bg-indigo-600 bg-red-500 rounded-md flex justify-center items-center ml-8 text-lg"
                          onClick={() => (updateItemQuantity(item.id, item.quantity - 1))}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500 ml-8"
                          onClick={() => (removeItem(item.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-5 justify-center items-center">
        <div className="text-gray-900 font-semibold text-xl">Total = ${cartTotal}</div>
        <button type="button" className="w-40 bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"><span>Pay ${cartTotal}</span></button>
        </div>
      </div>
    );
  }
};

export default cart;
