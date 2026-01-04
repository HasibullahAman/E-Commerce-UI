import { Copyright } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col items-center md:flex-row md:justify-between md:items-start
         bg-gray-800 p-8 rounded-lg gap-8 md:gap-0">
            <div className="flex flex-col items-center md:items-start gap-4">
                <Link href='/' className='flex items-center'>
                    <Image
                        src='/logo.png'
                        alt='HUA-E-Commerce Web Application'
                        width={36}
                        height={36}
                    />
                    <p className='hidden md:block text-md font-medium tracking-wider text-white'>HUA</p>
                </Link>
                <p className="text-sm text-gray-400">© 2026 Hasibullah Aman.</p>
                <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400
            items-center md:items-start">
                <p className="text-sm text-amber-50">Link</p>
                <Link href='/' className="hover:underline">Home</Link>
                <Link href='/contact' className="hover:underline">Contact</Link>
                <Link href='/terms' className="hover:underline">Terms of Service</Link>
                <Link href='/privacy' className="hover:underline">Privacy Policy</Link>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400
            items-center md:items-start">
                <p className="text-sm text-amber-50">Link</p>
                <Link href='/all-products' className="hover:underline">All Products</Link>
                <Link href='/new-arrivals' className="hover:underline">New Arrivales</Link>
                <Link href='/best-seller' className="hover:underline">Best Seller</Link>
                <Link href='/sale' className="hover:underline">Sale</Link>
            </div>
            <div className="flex flex-col text-sm gap-4 text-gray-400
            items-center md:items-start">
                <p className="text-sm text-amber-50">Link</p>
                <Link href='/about' className="hover:underline">About</Link>
                <Link href='/contact' className="hover:underline">Contact</Link>
                <Link href='/blog' className="hover:underline">Blog</Link>
                <Link href='/affiliate' className="hover:underline">Affiliate Program</Link>
            </div>
        </div>
    )
}

export default Footer
