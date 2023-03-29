import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const LoginPage = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.get("http://localhost:4000/login", {params:data}).then(async(res) => {

        localStorage.setItem('user',JSON.stringify(res.data))
        localStorage.setItem('isLoggedIn',true)
        toast.success("Login Successfull")
        if(res.data.type=='customer'){
          navigate('/customer')
        }else{
          navigate('/company')
        }
    }).catch((err) => {
        console.log(err.message)
        toast.error("Invalid credentials")
    })
}

const backButton =()=>{
  navigate('/')
}

// const googleAuth =()=>{
//   window.open('http://localhost:4000/auth/google/callback',"self")
// }
  return (
    <div className='h-screen bg-[rgb(234,234,234)] snap-y snap-mandatory overflow-scroll z-0 text-gray-700 flex items-center justify-center'>
    <form className=' flex flex-col sm:w-[80%] md:w-[35%]' onSubmit={handleSubmit(onSubmit)}>
    <div className='mx-auto mb-8'><span className='text-[28px] text-black font-[800] uppercase mb-8'>Login</span></div>
        <input className='px-6 py-2 mb-3 sm:80% border bg-transparent border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all   ' placeholder='Email' id="email" {...register('email', { required: true, maxLength: 30 })} />
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
        <input type='password' className='px-6 py-2  sm:80% mb-3 border bg-transparent border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all' placeholder='password' id="password" {...register('password', { required: true, maxLength: 30 })} />
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
        <div className='flex flex-row justify-center mt-4'>
            <input className='px-6 py-2 mb-3 border border-[#242424] mr-3 text-yellow-50  bg-[#242424] cursor-pointer rounded-full uppercase text-xs tracking-widest transition-all' type="submit" value='LOGIN' />
            <input className='px-6 py-2 mb-3 border border-[#242424] text-yellow-50  bg-[#242424] cursor-pointer rounded-full uppercase text-xs tracking-widest transition-all' type="button" onClick={backButton} value='BACK' />
        </div>
        <p className='mt-3 mx-auto'>OR</p>
        <div className='flex justify-center items-center'>
          <button className='mt-3 px-6 py-2 mb-3 border text-black border-[#242424] mr-3 bg-[#ffffff] cursor-pointer rounded-full uppercase text-xs tracking-widest transition-all' disabled>Sign in with google</button>
        </div>
    </form>
</div>
  )
}

export default LoginPage