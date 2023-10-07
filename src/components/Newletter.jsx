import React from 'react'

function Newletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
    <div className='max-[1240px] grid  mx-auto lg:grid-cols-3'> 
    <div className='lg:col-span-2 my-4'>
    <h1 className='md:tex-4xl sm:text-3xl text-2xl font-bold py-2'>Want to Get <br />new trendy Wears? </h1>
    <p>Signup To Aeries Trendy and Stay yp to Date</p>
      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row  items-center justify-between w-full'>
        <input className='p-3 flex rounded-md w-full text-black' type='text' placeholder='Enter Your Email' />
        <button className='bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 ml-4 mx-auto py-3 text-black'>Notify Me</button>
      </div>
      <p>Care about Your Trendy wears. Read Our <span className='text-red-700'>Privacy Policy</span></p>
    </div>
    </div>
    </div>
  )
}

export default Newletter
