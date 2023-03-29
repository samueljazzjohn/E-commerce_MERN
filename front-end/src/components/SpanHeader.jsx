import React,{useState,useEffect} from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SpanHeader = () => {

  const [data,setData] = useState()

  const [cart,getCart] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('user'))){
      setData(JSON.parse(localStorage.getItem('user')))
      let info = {user_id : JSON.parse(localStorage.getItem('user')).userId}
      axios.get('http://localhost:4000/customer/get-cart',{params:info}).then((res)=>{
        console.log(res.data)
        getCart(res.data)
      }).catch((err)=>{
        console.log(err)
      })  
    }
  },[cart])

  const createProduct=()=>{
    navigate('/company/create-product')
  }

  const handleClick=()=>[
    navigate('/customer')
  ]

  const handleCart=()=>{
    navigate('/customer/cart')
  }

  return (
    
    <div className='sticky top-[53px] z-20 bg-white h-[148px] pl-[150px] flex flex-row justify-between items-center'>
      <div className='flex flex-row justify-center items-center'>
        <span className='text-[#4D4D4D] mt-3 font-sans text-[24px] font-bold cursor-pointer' onClick={handleClick}>logoipsum</span>
        <select className='text-[#4D4D4D] bg-[#F8F8F8] p-4 rounded-md h-[50px] w-[200px] ml-[75px] font-sans' name="" id="">
          <option value="">Classifieds</option>
        </select>
        <form className=" px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className=" py-3 pl-12 pr-4 border w-[400px] h-[50px] rounded-md bg-[#F8F8F8] text-[#4D4D4D] focus:bg-white focus:border-[#F8F8F8]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </form>
      </div>
      { data && data.type=='company' ? 
      <div></div>
      :
      <div className="flex flex-row justify-center">
        <FavoriteBorderIcon className='text-[#4D4D4D] mr-[40px]' />
        <div>
          <ShoppingCartIcon className='text-[#4D4D4D] mr-[40px] cursor-pointer' onClick={handleCart}/>
          {cart && <div className='badge w-5 h-5 bg-[#00C6D7] text-white font-[600] flex justify-center items-center rounded-full '>{cart.count}</div>}
        </div>
        
        <AccountCircleIcon className='text-[#4D4D4D] mr-[40px]' />
      </div>
      }
      { data && data.type=='company' ? 
      <div className='mr-[50px]'>
      <button onClick={createProduct} className='text-white text-[18px] font-medium bg-[#00C6D7] h-[50px] rounded-md w-[150px] shadow-xl'>
        Create Product
      </button>
    </div>
      :
      <div className='mr-[50px]'>
        <button className='text-white text-[18px] font-medium bg-[#00C6D7] h-[50px] rounded-md w-[150px] shadow-xl'>
          Classifieds
        </button>
      </div>
      }
    </div>
  )
}

export default SpanHeader