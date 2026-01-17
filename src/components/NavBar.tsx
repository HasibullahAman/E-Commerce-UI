import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShopingCartIcon from './ShopingCartIcon'

const NavBar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
            {/* LEFT */}
            <Link href='/' className='flex items-center'>
                <Image
                    src='/logo.png'
                    alt='HUA-E-Commerce Web Application'
                    width={36}
                    height={36}
                    className='h-6 w-6 md:h-13 md:w-13'
                />
                <p className='hidden md:block'>HUA</p>
            </Link>
            {/* RIGHT */}
            <div className='flex items-center gap-6'>
                <SearchBar />
                <Link href="/">
                    <Home className='w-4 h-4 text-gray-600' />
                </Link>
                <Bell className='w-4 h-4 text-gray-600' />
                <ShopingCartIcon />
                <Link href='/Loging'>Sign In</Link>
            </div>
        </nav>
    )
}
export default NavBar

