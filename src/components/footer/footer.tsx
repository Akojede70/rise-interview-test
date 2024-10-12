import React from 'react'
import { footerLogo } from '../../assets/png/images-icon'
import ArrowButton from './arrow-button'

const Footer = () => {
  return (
    <footer className='w-full mb-[5%] px-[5%] md:px-[5%]'>
      <div className='lg:flex justify-center gap-[17%]'>
        {/* 1st col */}
      <div >
        <div>
        <img src={footerLogo} alt='footer logo' className='mb-[5%] lg:mb-[30%] lg:w-[70%] pt-[2%] '/>
        </div>
        <div className='space-y-[5%] lg:space-y-0 h-[18%] flex flex-col lg:gap-[20%]'>
        <button className='text-left'> About Us</button>
        <button className='text-left'> Careers</button>
        <button className='text-left'> FAQs</button>
        <button className='text-left'> Contact Info</button>
        <button className='text-left'> Press</button>
        <button className='text-left'> Rise Impact</button>
      </div>
      </div>

      {/* 2nd col */}
      <div className='flex flex-col gap-[4%]'>
        <h6 className='font-bold mb-[4%] lg:mb-[8%]'>Explore</h6>
        <ArrowButton text='Investment Club'/>
        <ArrowButton text='Blog'/>
      </div>

      {/* 3rd col */}
      <div className='flex flex-col gap-[4%]'>
        <h6 className='font-bold mb-[8%]'>Products</h6>
        <button className='text-left'> Rise App</button>
        <button className='text-left'> Wallets</button>
        <button> Asset Classes</button>
      </div>
      
      {/* 4th col */}
      <div className='flex flex-col gap-[4%]'>
        <h6 className='font-bold mb-[8%]'>Contact Us</h6>
        <ArrowButton text='0818714 7405'/>
        <ArrowButton text='hello@rise.capital'/>
        <ArrowButton text='Newsletter'/>
        <ArrowButton text='Instagram'/>
        <ArrowButton text='Twitter'/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
