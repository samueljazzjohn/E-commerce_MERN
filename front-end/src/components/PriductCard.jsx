import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { toast } from 'react-toastify';

const PriductCard = (props) => {

  var [data, setData] = useState()


  useEffect(() => {
    let info = { id: props.id }
    axios.get('http://localhost:4000/company/get-details', { params: info }).then((res) => {
      console.log(res.data.companyName)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleCart = () => {
    let info = {id:props.productId,quantity:props.quantity}
    let cartData = {product : props.productId,user: JSON.parse(localStorage.getItem('user')).userId}
    console.log(info)
    axios.put('http://localhost:4000/product/update-quantity',info).then((res) => {
      toast.success("Added to cart successfully")
      console.log(cartData)
      axios.post('http://localhost:4000/customer/add-item',cartData).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
      toast.error("Server not responding")
    })
  }

  return (
    <div className='ml-[50px] mb-[30px] h-[300px] min-w-[250px] bg-white flex flex-col rounded-xl'>
      <img className='rounded-xl h-[175px] w-full object-cover transition-all' src={`http://localhost:4000/uploads/${props.url}`} alt="" srcset="" />
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-black pl-2 pt-2 text-[14px]'>{props.name}</p>
          <p className='text-black pl-2 pt-1 text-[14px]'>{data && data.companyName}</p>
        </div>
        {JSON.parse(localStorage.getItem('isLoggedIn')) && props.type=='customer' ?
          <button className='bg-[#00C6D7] m-2 text-[14px] rounded-xl p-2 text-white' onClick={handleCart}> add to cart</button>
          :
          <div></div>
        }

      </div>

      <div className='flex flex-row p-2 justify-between items-center mt-1'>
        <p className='text-[#00C6D7] text-[20px] font-[600]'>{`Rs.${props.price}`}</p>
        <div className='h-8 w-8 rounded-full bg-[#00C6D7] flex justify-center items-center'><p className='text-white text-[16px] font-[600]'>{props.quantity}</p></div>
        <div className='text-[#8D8D8D] flex flex-row justify-center items-center p-2'>
          <LocationOnIcon />
          <p>{data && data.companyPlace}</p>
        </div>
      </div>
    </div>
  )
}

export default PriductCard