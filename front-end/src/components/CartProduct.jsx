import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify'


const CartProduct = (props) => {

    const [product,setProduct ] =useState()

    useEffect(()=>{
        let data = {product:props.product}
        axios.get('http://localhost:4000/product/single-product', { params: data }).then((res) => {
            console.log(res.data)
            setProduct(res.data)
          }).catch((err) => {
            console.log(err)
          })
    },[])

    const handleDelete=()=>{
        axios.delete('http://localhost:4000/customer/delete-cart',{data:{id:props.id}}).then((res)=>{
            let info={id:product._id,quantity:product.quantity}
            axios.put('http://localhost:4000/product/add-quantity',info).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
            console.log(res.data.message)
            toast.success("Successfully Deleted")
        }).catch((err)=>{
            console.log(err)
            toast.error("Something Went wrong")
        })
    }
  return (
    product ?
    <div className='mt-[50px] flex flex-row h-[175px] w-full bg-gray-400 p-2 rounded-xl justify-between pl-5 pr-5 '>
              <img className='rounded-xl h-[160px] w-[200pxpx] object-cover transition-all' src={`http://localhost:4000/uploads/${product.Image}`} alt="" srcset="" />
              <div onClick={handleDelete}>

              <DeleteIcon className='ralative mr-3 mt-5 cursor-pointer' />
              </div>
    </div>
    :
    <div></div>
  )
}

export default CartProduct