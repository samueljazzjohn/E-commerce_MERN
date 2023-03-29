import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import PriductCard from '../components/PriductCard'
import SpanHeader from '../components/SpanHeader'

const CompanyPage = () => {

    const [product,setProduct]=useState()



    useEffect(()=>{
        let info = {id :JSON.parse(localStorage.getItem('user')).id}
        axios.get('http://localhost:4000/product/get-products',{params:info}).then((res)=>{
            console.log(res.data)    
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    


  return (
    <div className=' h-screen font-sans'>
      <Header />
      <SpanHeader />
      <div className='w-full mt-[30px] grid grid-cols-4 p-[150px] justify-start bg-gray-100'>
        {product && product.map((data)=> <PriductCard key={data._id} type='company' id={data.company} name={data.productName} url={data.Image} quantity={data.quantity} price={data.price} />)}
      </div>
    </div>
  )
}

export default CompanyPage