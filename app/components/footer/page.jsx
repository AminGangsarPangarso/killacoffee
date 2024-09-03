import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="bg-coffee-dark text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Bagian kiri: Tentang Eliza Coffee */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Eliza Coffee</h3>
            <p>Copyright 2023 Eliza Coffee. All Rights Reserved.</p>
          </div>

          {/* Bagian tengah: Navigasi */}
          <div className="space-y-4 md:space-y-0 md:mx-8">
            <h3 className="text-lg font-bold">Navigasi</h3>
            <ul className="flex flex-col md:flex-row">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Menu</a></li>
              {/* ... dan seterusnya */}
            </ul>
          </div>

          {/* Bagian kanan: Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontak</h3>
            <ul>
              <li>12 John Avertime #35 - New York</li>
              <li>Elizacoffee@Coffee.Com</li>
              <li>+1-222-34-ELIZA</li>
            </ul>
            <div className="flex">
              {/* Ikon sosial media */}
              <a href="#" className="mr-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent