import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'

const CreateProductPage = () => {

    const [user,setUser] = useState()

    const { register, handleSubmit, formState: { errors }, control } = useForm();

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')).id)
    },[user])

    const navigate = useNavigate()

    const onSubmit = (data) => {
        data = {...data,user}
        // console.log('user'+user)
        const formData = new FormData()
        formData.append('image', data.image[0])
        formData.append('product', data.product)
        formData.append('quantity', data.quantity)
        formData.append('company', data.user)
        formData.append('price', data.price)
        console.log(formData)
        axios.post("http://localhost:4000/product/upload", formData, {data:user}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            toast.success("Product added Successfully")
        }).catch((err) => {
            console.log(err.message)
            toast.error("Invalid credentials")
        })
        console.log(data)
    }

    const backButton = () => {
        navigate('/company')
    }

    return (
        <div className='h-screen bg-[rgb(234,234,234)] snap-y snap-mandatory overflow-scroll z-0 text-gray-700 flex items-center justify-center'>
            <form className=' flex flex-col sm:w-[80%] md:w-[35%]' onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto mb-8'><span className='text-[28px] text-black font-[800] uppercase mb-8'>Create product</span></div>
                <input className='px-6 py-2 mb-3 sm:80% border bg-transparent border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all   ' placeholder='Product Name' id="product" {...register('product', { required: true, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
                <input type='number' className='px-6 py-2 mb-3 sm:80% border bg-transparent border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all   ' placeholder='Quantity' id="quantity" {...register('quantity', { required: true, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
                <input type='number' className='px-6 py-2 mb-3 sm:80% border bg-transparent border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all   ' placeholder='Price' id="price" {...register('price', { required: true, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
                {/* <input hidden  placeholder='id' id="id" value={user && user} {...register('id')} /> */}
                <Controller
                    name="image"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange } }) => (
                        <input type="file" accept="image/*" onChange={onChange} {...register('image', { required: true })} />
                    )}
                />
                <div className='flex flex-row justify-center mt-4'>
                    <input className='px-6 py-2 mb-3 border border-[#242424] mr-3 text-yellow-50  bg-[#242424] cursor-pointer rounded-full uppercase text-xs tracking-widest transition-all' type="submit" value='create' />
                    <input className='px-6 py-2 mb-3 border border-[#242424] text-yellow-50  bg-[#242424] cursor-pointer rounded-full uppercase text-xs tracking-widest transition-all' type="button" onClick={backButton} value='BACK' />
                </div>
            </form>
        </div>
    )
}

export default CreateProductPage