import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import SpanHeader from '../components/SpanHeader'
import PriductCard from '../components/PriductCard'
import CartProduct from '../components/CartProduct'

const CartPage = () => {

    const [cart, setCart] = useState()

    useEffect(() => {
        let info = {user_id :JSON.parse(localStorage.getItem('user')).userId}
        axios.get('http://localhost:4000/customer/cart-items',{params:info}).then((res) => {
            let res1 = JSON.stringify(res.data)
            console.log("cart items"+res1)
            setCart(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[cart])

    return (
        <div className=' h-screen font-sans'>
            <Header />
            <SpanHeader />
            <div className='w-full p-[150px] bg-gray-100 flex flex-col justify-start items-center'>
                {cart && cart.map((data) => <CartProduct key={data._id} id={data._id} product={data.product}/>)}
            </div>
        </div>
    )
}

export default CartPage