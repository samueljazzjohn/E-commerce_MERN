import React, { useEffect,useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';



const Header = () => {

  const navigate=useNavigate()

  const [data,setData] = useState()

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('user'))){
      setData(JSON.parse(localStorage.getItem('user')))
    }
  },[])

  const registerHandle=()=>{
    navigate('/register')
  }

  const loginHandle=()=>{
    navigate('/login')
  }

  const handleLogout=()=>{
    axios.get('http://localhost:4000/logout').then((res)=>{
      localStorage.clear()
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    })
  }

  console.log(localStorage.getItem('user'))

  return (
    localStorage.getItem('isLoggedIn') ?
    <header className='sticky top-0 bg-[#3187ED] h-[53px] w-[100%] flex flex-row justify-between items-center text-white text-[16px] z-20'>
        <div className=' flex flex-row'>
            <PhoneIcon  className='ml-[150px] text-white'/>
            <p className='ml-[16px]'> {data && data.phone}</p>
            <MailIcon className='ml-[65px] ' />
            <p className='ml-[16px]'>{data && data.email}</p>
        </div>
        <div className='flex flex-row'>
            <LocationOnIcon />
            <p className='ml-[15px]'>{data && data.place}</p>
            <CurrencyRupeeIcon className='ml-[98px]' />
            <p className='ml-1'>INR</p>
            <ArrowDropDownIcon className='ml-1'/>
            <p className='ml-[58px]'>EN</p>
            <ArrowDropDownIcon className='ml-1'/>
            <LogoutIcon onClick={handleLogout} className='ml-2 mr-[120px] cursor-pointer' />
        </div>
    </header>
    :
    <header className='sticky top-0 bg-[#3187ED] h-[53px] w-[100%] flex flex-row justify-end items-center text-white text-[16px] z-20'>
      <p className='text-white uppercase text-[16px] font-[500] cursor-pointer pr-4' onClick={registerHandle}>register</p>
      <p className='text-white uppercase text-[16px] font-[500] cursor-pointer pr-4' onClick={loginHandle}>login</p>

    </header>
  )
}

export default Header