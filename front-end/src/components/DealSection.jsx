import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DealCard from './DealCard'
import axios from 'axios'


const DealSection = () => {

  const [product,setProduct] = useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/product/get-deals').then((res)=>{
        console.log(res.data)    
        setProduct(res.data)
    }).catch((err)=>{
        console.log(err)
    })
},[product])

  const navigate =useNavigate()

  const handleView=()=>{
    navigate('/customer/products')
  }


  return (
    <div className='pl-[150px] pr-[150px] mt-[35px]'>
        <div className='flex flex-row justify-between'>
        <h2 className='text-[25px] font-[600] text-black'>Best Deals</h2>
        <p className=' text-[15px] font-[600] text-[#3187ED] cursor-pointer' onClick={handleView}>View all</p>
        </div>
        <div className='grid grid-cols-4 gap-8'>
            {product && product.map((data)=><DealCard key={data._id} image={data.Image} price={data.price} name={data.productName}  />)}
            {/* <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard />
            <DealCard /> */}
        </div>
    </div>
  )
}

export default DealSection