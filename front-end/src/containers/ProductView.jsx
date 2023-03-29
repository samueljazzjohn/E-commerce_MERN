import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import SpanHeader from '../components/SpanHeader'
import PriductCard from '../components/PriductCard'

const ProductView = () => {

    const [product,setProduct]=useState()

    useEffect(()=>{
        // let info = {id :JSON.parse(localStorage.getItem('user')).id}
        axios.get('http://localhost:4000/product/get').then((res)=>{
            console.log(res.data)    
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[product])


  return (
    <div className=' h-screen font-sans'>
      <Header />
      <SpanHeader />
      <div className='w-full mt-[30px] grid grid-cols-4 p-[150px] justify-start bg-gray-100'>
        {product && product.map((data)=> <PriductCard key={data._id} type="customer" id={data.company} name={data.productName} url={data.Image} quantity={data.quantity} price={data.price} />)}
      </div>
    </div>
  )
}

export default ProductView