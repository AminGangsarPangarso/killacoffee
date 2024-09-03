import React from 'react'
import Image from 'next/image'
// import Hero from '../../../public/HERO.png'


const HomePage = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='max-w-screen-2xl m-auto flex min-h-[500px]'>
            <div className=' flex justify-center  flex-col  flex-1 p-2'>
                <h2 className='text-[40px] flex flex-end'>Elka Coffe</h2>
                <p className='text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequuntur
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequunturLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequuntur.</p>

                <div className='w-full flex gap-2 mt-4 items-center'>
                    <button className="bg-[#54372B] rounded-full text-white px-4 py-2 ">Order Now</button>
                    <button className="bg-[#F7E1BC] px-4 py-2 rounded-full text-[#54372B]">Our Story</button>
                </div>
            </div>
            <div className=' flex-1 flex items-center text-center justify-center p-2'>
                <img src="/kopi.png" className='h-[540px]' alt="Hero Image" />
            </div>

        </div>
    </div>
  )
}

export default HomePage


/**
 * 
 * jj
<div className=" mt-10 px-20  justify-between w-full grid grid-cols-2 gap-4  ">
    <div className=" flex items-center justify-center flex-col "> 
    <div className="">
    <h2 className='text-[40px]'>Elka Coffe</h2>
    <p className='text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequuntur
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequunturLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consequuntur.</p>
    </div>
    <div className="flex gap-2">
    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Order Now</button>
    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Our Story</button>
    </div>
    </div>
    <Image className="w-[10000] h-[10000]" src={Hero} alt="Hero Image" />
</div>
 */