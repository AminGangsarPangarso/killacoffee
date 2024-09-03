import React from 'react'
import Image from 'next/image'
import { Navbarmenu } from '../constant/page'
import Link from 'next/link'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
// import {Logo} from '../../../../public/logokopi.png'
export const NavbarComponent = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 shadow-md ">
      <div className="flex items-center space-x-4">
        <Image src={""} alt="Logo" className="h-8 w-8" />
        <ul className="hidden md:flex space-x-8">
          {Navbarmenu.map((item, index) => (
            <li key={index}>
              <Link href={item.patch}>
                <div className="hover:text-yellow-500 transition duration-300">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <FaUser className="text-yellow-500 cursor-pointer" />
        <FaShoppingCart className="text-yellow-500 cursor-pointer" />
      </div>
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button">
        </button>
      </div>
    </nav>
  )
}

