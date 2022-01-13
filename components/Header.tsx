import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    ShoppingCartIcon,
    SearchIcon
} from '@heroicons/react/outline'
import { useCart } from 'react-use-cart'
const Header = () => {
    const router = useRouter();
    const { totalUniqueItems } = useCart();
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(
            {
                pathname: `/search/${searchTerm}`,
            }
        )
        setSearchTerm("")
    }

    return (
        <header className='flex mx-2 md:mx-10 my-2 py-4 border-b items-center border-gray-300'>
            <Link href="/"><h1 className=' cursor-pointer text-base md:text-2xl font-bold hover:text-red-400'>Atlas Store</h1></Link>
            <div className="search w-30 flex space-x-2 px-1 py-2 items-center md:ml-auto border border-gray-300 focus-within:ring-2 sm:w-min rounded-md">
            <SearchIcon className=' w-6 h-6 text-gray-300' />
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder='Search' className=' focus:outline-none' onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                />
            </form>
            </div>
            <Link href='/cart'>
                <div className='relative'>
                    <div className="rounded flex justify-center items-center -top-2 right-3 z-10 text-white font-semibold absolute bg-red-500 w-4 h-4 text-xs">
                    {totalUniqueItems} 
                    </div>
                <ShoppingCartIcon className='relative cursor-pointer w-6 h-6 mx-4 hover:text-red-400'/>
                </div>
            </Link>
        </header>
    )
}

export default Header
