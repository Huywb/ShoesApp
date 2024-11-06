import React from 'react'
import People from '../assets/People.svg'
import UserButton from '../assets/user-plus.svg'
import Mail from '../assets/Mail.svg'
import HidePass from '../assets/Hide-pass.svg'
import ShowPass from '../assets/Show-pass.svg'
import Passwrod from '../assets/Password.svg'

import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <motion.div     
                    initial={{ opacity: 0,y:20 }}
                    animate={{ opacity: 1,y:0}}
                    transition={{ duration: .8 }}>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col gap-10 items-center w-[30%] text-[#eeeeee] text-xl font-bold'>
            <h1 className='text-primary font-bold text-5xl text-shadow-custom '>Create Your Account</h1>
            <div className='p-10 flex flex-col gap-8 bg-[#1f2936] w-[100%]'>
                <div className='flex flex-col gap-1 w-full'>
                    <h1 className=' opacity-70 '>Full name</h1>
                    <div className='flex p-2 gap-1 bg-[#374151]'>
                        <img src={People} alt="" className='w-10 opacity-70 '/>
                        <input type="text" className='bg-transparent outline-none' placeholder='Huy Pham' />
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <h1 className=' opacity-70 '>Email address</h1>
                    <div className='flex p-2 gap-1 bg-[#374151]'>
                        <img src={Mail} alt="" className='w-10 opacity-70 '/>
                        <input type="text" className='bg-transparent outline-none' placeholder='HuyPham@gmail.com' />
                    </div>
                </div><div className='flex flex-col gap-1 w-full'>
                    <h1 className=' opacity-70 '>Password</h1>
                    <div className='flex p-2 gap-1 bg-[#374151] relative'>
                        <img src={Passwrod} alt="" className='w-10 opacity-70 '/>
                        <input type="password" className='bg-transparent outline-none' placeholder='******' />
                        <img src={ShowPass} alt="" className='w-10 absolute right-0 bottom-2 cursor-pointer ' />
                    </div>
                </div><div className='flex flex-col gap-1 w-full'>
                    <h1 className=' opacity-70 '>Confirm Password</h1>
                    <div className='flex p-2 gap-1 bg-[#374151] relative'>
                        <img src={Passwrod} alt="" className='w-10 opacity-70 '/>
                        <input type="password" className='bg-transparent outline-none' placeholder='******' />
                        <img src={ShowPass} alt="" className='w-10 absolute right-0 bottom-2 cursor-pointer ' />
                    </div>
                </div>
                <div className='bg-[#047552] flex gap-2 p-4 justify-center cursor-pointer'>
                    <img src={UserButton} alt=""  className='w-8'/>
                    <button>Register</button>
                </div>
                <p className='font-semibold'>Already have an account <Link to={'/login'}><span className='font-bold underline cursor-pointer'>Login</span></Link></p>
            </div>
        </div>
    </div>
    </motion.div>

  )
}

export default RegisterPage