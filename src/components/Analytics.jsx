import React from 'react'
import picture1 from '../assets/picture1.jpg'

const Analytics = () => {
  return (
    <div className='bg-[#e5f0f4] w-ful py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img  className='w-[500px] h-[400px] mx-auto my-4 ' src={picture1} alt='/' />
        <div className ='flex flex-col justify-center'>
            <p className='text-green-700 font-bold'> Shop fast Online</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Shop as You want</h1>
            <p>Follow along and build this React JS & Tailwind CSS 100% mobile responsive 
                website from scratch. We will install and use Tailwind CSS in a 
                “Create-React-App” application. </p>
                <button className='bg-sky-400 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Analytics
