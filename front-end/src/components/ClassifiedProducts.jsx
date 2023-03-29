import React, {useState,useEffect} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PriductCard from './PriductCard';
import axios from 'axios';

const ClassifiedProducts = () => {

  const [product,setProduct] = useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/product/get-classifieds').then((res)=>{
        console.log(res.data)    
        setProduct(res.data)
    }).catch((err)=>{
        console.log(err)
    })
},[product])

  return (
    <div className='pl-[150px] mt-20 pb-20 pt-20 w-full flex flex-row justify-start items-center bg-[#E5E5E5] overflow-scroll'>
        <div className='flex flex-col'>
            <p className='text-[22px] font-[600] text-black text-center'>Classified <br /> Products on <br /> the week</p>
            <div className='mt-8 flex flex-row justify-center items-center'>
                <div className='w-6 h-6 rounded-full bg-white shadow-xl'>
                    <KeyboardArrowLeftIcon className='text-black' />
                </div>
                <div className='ml-4 w-6 h-6 rounded-full bg-white shadow-xl'>
                    <KeyboardArrowRightIcon  className='text-black' />
                </div>
            </div>
            <button className='mt-10 text-white text-[18px] font-medium bg-[#00C6D7] h-[50px] rounded-md w-[150px] shadow-xl'>
          Explore
        </button>
        </div>
        {
          JSON.parse(localStorage.getItem('user')) ?

          product && product.map((data)=> <PriductCard key={data._id} id={data.company} type={JSON.parse(localStorage.getItem('user')).type} name={data.productName} productId={data._id} url={data.Image} quantity={data.quantity} price={data.price} />)

          :
          product && product.map((data)=> <PriductCard key={data._id} id={data.company} type='guest' name={data.productName} productId={data._id} url={data.Image} quantity={data.quantity} price={data.price} />)


        }
    </div>
  )
}

export default ClassifiedProducts