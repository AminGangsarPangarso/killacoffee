import React from 'react'
import { NavbarComponent } from '../header/NavbarComponents/page'
import FooterComponent from '../footer/page'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
    <main className='flex-grow'>
            <NavbarComponent/>
            {children}
            <FooterComponent />
        </main>
    </div>
  )
}

export default Layout