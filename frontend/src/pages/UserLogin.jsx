import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    } 
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
         <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'/>
        <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2' required type='email' placeholder='email@example.com'/>
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-3 rounded px-4 border w-full text-lg placeholder:text-base py-2' required type='password' placeholder='password'/> 
        <button className='bg-[#111] text-[#fff] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2'>Login</button>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </form>
        </div>
        <div>
             <button onClick={()=>navigate('/captain-login')} className=' text-[#fff] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2 bg-[#10b461]'>Sign in as Captain</button>
        </div>
    </div>
  )
}

export default UserLogin