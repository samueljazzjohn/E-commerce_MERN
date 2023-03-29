import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LinkSection = () => {
  return (
    <div className='mt-[14px] ml-[150px] font-[400px] text-[#4D4D4D] text-[16px] flex flex-row justify-start items-center'>
        <div className='text-[#4D4D4D] flex flex-row cursor-pointer'>
            <p>All categories</p>
            <KeyboardArrowDownIcon className='text-[#4D4D4D] ml-2' />
        </div>
        <div className='ml-6 flex flex-row'>
            <p className='mr-[24px] cursor-pointer'>Books</p>
            <p className='mr-[24px] cursor-pointer'>Electronics</p>
            <p className='mr-[24px] cursor-pointer'>Real Estate</p>
            <p className='mr-[24px] cursor-pointer'>Cars-Bikes</p>
            <p className='mr-[24px] cursor-pointer'>Dorm-Furniture</p>
            <p className='mr-[24px] cursor-pointer'>Men</p>
            <p className='mr-[24px] cursor-pointer'>Women</p>
            <p className='mr-[24px] cursor-pointer'>Music</p>
            <p className='mr-[24px] cursor-pointer'>Hobbies Games</p>
            <p className='mr-[24px] cursor-pointer'>Toys</p>
            <p className='mr-[24px] cursor-pointer'>Kids</p>
        </div>
    </div>
  )
}

export default LinkSection