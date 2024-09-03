import React from 'react'
import { Navbarmenu } from '../constant/page'
import Link from 'next/link'
import { FaUser, FaShoppingCart } from 'react-icons/fa'

export const NavbarComponent = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 shadow-md ">
      <div className="flex items-center space-x-4">
       <h2 className=' text-lg text-yellow-700'>House Coffe</h2>
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

