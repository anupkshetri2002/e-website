import React,{useState} from 'react,'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handlenav = () => {
        setNav(!nav)
    }
  return (
    <div className='text-white justify-between flex items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1  className='w-full text-3xl font-bold text-[#00df9a]'>ARIES.</h1>
      <ul className='flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div>
        <AiOutlineMenu  size={20}/>
      </div>
      <div className='fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300]'>
      <h1  className='w-full text-3xl font-bold text-[#00df9a] m-4'>ARIES.</h1>
        <ul className='pt-24 uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
