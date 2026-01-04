import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col items-center md:flex-row md:items-start
         bg-gray-800 p-8 rounded-lg">
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
        </div>
    )
}

export default Footer
