import React from 'react';
import logo from '../assets/logo.svg';
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";



const Footer = () => {
  return (
 
        <div className='wrapper flex  flex-col lg:flex-row justify-start lg:justify-between gap-12'>
            <div>
                <h1 className='mx-auto lg:mx-0 text-4xl text-bold text-yellow-500' >ARIES </h1>
                <p className='text-gray-400 my-7 text-center lg:text-start'>Trendy Aries: Where Style Meets Sustainability. We specialize in crafting high-quality, eco-conscious clothing
                 that blends fashion-forward designs with ethical production practices
                 <br />Kathmandu ,Baneshwor </p>
                <div className='flex items-center gap-[18px] justify-center lg:justify-start'> 
                <img src={facebookIcon} alt='' className='cursor-pointer' />
                <img src={twitterIcon} alt='' className='cursor-pointer' />
                <img src={instagramIcon} alt='' className='cursor-pointer' />
                <img src={linkedinIcon} alt='' className='cursor-pointer' />
                <img src={youtubeIcon} alt='' className='cursor-pointer' />

                </div>
            </div>
            <ul className='flex flex-col sm:flex-row items-center gap-10 mx-auto lg:max-0'>
                <li className='link border-primary-green'>Home</li>
                <li className='link border-primary-green'>Compnay</li>
                <li className='link border-primary-green'>About</li>
                <li className='link border-primary-green'>Resources</li>
                <li className='link border-primary-green'>Contact</li>

            </ul>
        </div>
      
    
  )
}

export default Footer
