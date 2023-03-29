import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import newsletterImage from '../assets/Email.png'

const NewsLetter = () => {
  return (
    <div className='bg-[#3187ED] h-[285px] w-full flex flex-row justify-between items-center p-[150px]'>
        <img className='text-white opacity-30 h-[100px] w-[100]' src={newsletterImage} alt="" srcset="" />
        <div className='flex flex-col max-w-lg text-white'>
            <p className='font-[600] text-[24px]'>Sign Up for Newsletter</p>
            <p className='mt-5 max-w-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>
        <form className=" px-4">
          <div className="flex justify-between items-center border w-[400px] h-[50px] rounded-md bg-[#F8F8F8] text-black">
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-[75%] py-3 pl-12 pr- focus:bg-white focus:border-[#F8F8F8] rounded-md"
            />
            <button type='submit' className='bg-[#4D4D4D] text-[14px] text-white h-[40px] rounded-xl uppercase pl-4 pr-4 mr-1'>subscribe</button>
          </div>
        </form>
    </div>
  )
}

export default NewsLetter