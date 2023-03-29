import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const DealCard = (props) => {
  return (
    <div className='mt-10 flex flex-row justify-center items-center'>
        <img className='h-[150px] w-[120px] rounded-xl object-cover' src={`http://localhost:4000/uploads/${props.image}`} alt="" srcset="" />
        <div className='ml-2 flex flex-col'>
            <p className='text-black text-[16px]'>{props.name}</p>
            <p className='mt-6 text-[#3187ED] text-[20px] font-[400]'>{`Rs.${props.price}`}</p>
            <div className='mt-3 flex flex-row'>
                <StarIcon className='text-[#3187ED] w-14 h-13' />
                <StarIcon className='text-[#3187ED] w-14 h-13' />
                <StarIcon className='text-[#3187ED] w-14 h-13' />
                <StarIcon className='text-[#3187ED] w-14 h-13' />
                <span className=' text-[#8D8D8D]'>(12)</span>
            </div>
        </div>
    </div>
  )
}

export default DealCard