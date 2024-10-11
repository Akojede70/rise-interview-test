import React from 'react'
import { footerLogo } from '../../assets/png/images-icon'
import ArrowButton from './arrow-button'

const Footer = () => {
  return (
    <footer className='w-full mb-[5%] px-[5%]'>
      <div className='flex justify-center gap-[17%]'>
        {/* 1st col */}
      <div >
        <div>
        <img src={footerLogo} alt='footer logo' className='mb-[30%] w-[70%] pt-[2%] '/>
        </div>
        <div className='h-[18%] flex flex-col gap-[20%]'>
        <button > About Us</button>
        <button> Careers</button>
        <button> FAQs</button>
        <button> Contact Info</button>
        <button> Press</button>
        <button> Rise Impact</button>
      </div>
      </div>

      {/* 2nd col */}
      <div className='flex flex-col gap-[4%]'>
        <h6 className='font-bold mb-[8%]'>Explore</h6>
        <ArrowButton text='Investment Club'/>
        <ArrowButton text='Blog'/>
      </div>

      {/* 3rd col */}
      <div className='flex flex-col gap-[4%]'>
        <h6 className='font-bold mb-[8%]'>Products</h6>
        <button> Rise App</button>
        <button> Wallets</button>
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
