import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col justify-center'>
    <p className='uppercase text-amber-400 font-bold p-2'>Take style seriously</p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Be a Trend</h1>
    <div className='flex justify-center items-center'>
      <p className='md:tex-5xl sm:text-4xl text-xl font-bold'>Get an Trendy Wears For all</p>
      <Typed  className='md:tex-5xl sm:text-4xl text-xl font-bold pl-2 text-orange-950' strings={['Man' , 'Woman', 'Children']} typeSpeed={120} backspped={140} loop />
    </div>
    <p className='md:text-2xl text-xl font-bold text-yellow-500'>
      STAY HOME AND SHOP ONLINE.YOU'RE TOO PRETTY TO HAVE TO LOOK FOR A PARKING SPOT
    </p>
    <button className='bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy Now</button>
    </div>
      
    </div>
  )
}

export default Hero

