import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext';

const SellerLogin = () => {

    const { isSeller, setIsSeller, navigate} = useAppContext();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        setIsSeller(true)
    }

    useEffect(() => {
        if (isSeller) {
            navigate('/seller')
        }
    },[isSeller])

  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-500'>
      
      <div className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200'>
        <p><span className='text-2xl font-medium'>Seller</span> Login</p>
        <div className='w-full'>
            <p>Email</p>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Enter Your Email Address' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' type='email' required />
        </div>

        <div className='w-full'>
            <p>Password</p>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Enter Your Password' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' type='password' required />
        </div>

        <button>

        </button>
      </div>
    </form>
  )
}

export default SellerLogin
