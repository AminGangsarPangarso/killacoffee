import React from 'react'

import FooterComponent from '../footer/page'
import { NavbarComponent } from '../NavbarComponents/page'


const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
    <main className='flex-grow'>
         <NavbarComponent />
            {children}
            <FooterComponent />
        </main>
    </div>
  )
}

export default Layout