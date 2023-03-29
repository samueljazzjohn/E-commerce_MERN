import React from 'react'
import { SocialIcon } from 'react-social-icons'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AppleIcon from '@mui/icons-material/Apple';
import Shop2Icon from '@mui/icons-material/Shop2';

const Footer = () => {
  return (
    <div className='bg-white text-[#8D8D8D] p-[150px] flex flex-row justify-between '>
        <div className='flex flex-col justify-start'>
            <span className='text-[#4D4D4D] mt-3 font-sans text-[24px] font-bold'>logoipsum</span>
            <p className='mt-[40px] max-w-xs text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <div className='flex flex-row'>
                <div className='mt-[20px] bg-[#F8F8F8] rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <SocialIcon url='https://youtube.com/' fgColor='grey' bgColor='#F8F8F8' style={{ height: 30, width: 30 }}></SocialIcon>
                </div>
                <div className='ml-4 mt-[20px] bg-[#F8F8F8] rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                <SocialIcon url='https://www.linkedin.com/' fgColor='grey' bgColor='#F8F8F8' style={{ height: 30, width: 30 }}></SocialIcon>

                </div>
                <div className='ml-4 mt-[20px] bg-[#F8F8F8] rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                <SocialIcon url='https://twitter.com/' fgColor='grey' bgColor='#F8F8F8' style={{ height: 30, width: 30 }}></SocialIcon>

                </div>
                <div className='ml-4 mt-[20px] bg-[#F8F8F8] rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                <SocialIcon url='https://www.facebook.com/' fgColor='grey' bgColor='#F8F8F8' style={{ height: 30, width: 30 }}></SocialIcon>

                </div>
                <div className='ml-4 mt-[20px] bg-[#F8F8F8] rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                <SocialIcon url='https://www.instagram.com/' fgColor='grey' bgColor='#F8F8F8' style={{ height: 30, width: 30 }}></SocialIcon>

                </div>
            </div>
        </div>
        <div className='quick-links lex flex-col justify-start'>
        <span className='text-[#4D4D4D] mt-3 font-sans text-[18px] font-bold uppercase'>quick links</span>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Products</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'> Classifieds</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Contact Us</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Login</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Sign Up</p>
        </div>
        <div>
        <span className='text-[#4D4D4D] mt-3 font-sans text-[18px] font-bold uppercase'>customer area</span>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>My Account</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'> Orders</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Tracking List</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Terms</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Privacy Policy</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Return Policy</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'> My Cart</p>
        </div>
        <div>
        <span className='text-[#4D4D4D] mt-3 font-sans text-[18px] font-bold uppercase'>vendor area</span>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Partner with us</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'> Training</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'> Procedures</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Terms</p>
        <p className='mt-[12px] text-[#8D8D8D] text-[14px]'>Privacy Policy</p>
        </div>
        <div>
        <span className='text-[#4D4D4D] mt-3 font-sans text-[18px] font-bold uppercase'>contact</span>
        <p className='mt-[10px] max-w-xs text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <div className='mt-[20px] flex flex-row justify-between items-center'>
            <HeadsetMicIcon className='text-[#8D8D8D] w-[25px] h-[25px]' />
            <div>
                <p className='text-[#8D8D8D] text-[14px]'>Have any query?</p>
                <p className='text-[#3187ED] text-[14px]'>+123 456 789</p>
            </div>
            <button type='submit' className='bg-transparent border border-[#3187ED] text-[14px]  font-[600] text-[#3187ED] h-[40px] rounded-md uppercase pl-4 pr-4 mr-1'>chat</button>
        </div>
        <div className='flex flex-row justify-between p-2 items-center mt-[20px]'>
            <button type='submit' className='bg-[#000000] text-[14px] w-[175px] text-white rounded-xl uppercase justify-between items-center  pl-4 pr-4 mr-1 flex flex-row p-2'>
                <AppleIcon className='text-white' />
                <div>
                    <p className='text-white font-[400] text-[12px]'>Download on the</p>
                    <span className='text-white font-[600]'>App store</span>
                </div>
            </button>
            <button type='submit' className='bg-[#000000] text-[14px] text-white w-[175px] rounded-xl uppercase pl-4 pr-4 mr-1 flex flex-row justify-between items-center p-2'>
            <Shop2Icon className='text-white' />
                <div>
                    <p className='text-white font-[400] text-[12px]'>get it on</p>
                    <span className='text-white font-[600]'>google play</span>
                </div>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Footer