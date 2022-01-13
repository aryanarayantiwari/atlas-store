import Link from 'next/link'
import React from 'react'

const Products = ({products}) => {
  
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" id='allproducts'>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">All Products</h2>
        <p className='text-gray-500 text-sm'>{products.length} Products</p>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link href={`/products/${product._id}`} >
            <div key={product.id} className="group relative cursor-pointer">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-4 aspect-h-3 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    )
}

export default Products
