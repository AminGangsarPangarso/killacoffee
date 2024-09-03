import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='w-screen px-10 h-screen '>
        <h2 className='text-[40px] text-[#F7E1BC]'>About Us</h2>
        <Image src="" alt="about Image" className='w-60' />
        <div className="card rounded-lg px-10 bg-[#AD714A] w-full max-auto flex items-center justify-center">
            <div className="max-w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nulla! Explicabo reiciendis eos voluptatem laudantium doloremque repellat, soluta sit inventore obcaecati illo excepturi aut, accusantium aliquid quo modi eveniet veritatis.
            </div>
        </div>
    </div>
  )
}

export default AboutPage