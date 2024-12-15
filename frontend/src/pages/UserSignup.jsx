import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserSignup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [userData, setUserData] = useState({})
    
    
    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
            fullname: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })

        console.log(userData)
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        

    }
  return (
    <div>

    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
     <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'/>
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <h3 className='text-lg font-medium mb-5'>What&apos;s your name</h3>
    <div className='flex gap-3 mb-6'>
    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2' required type='text' placeholder='First name'/>
    <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className='bg-[#eeeeee] rounded px-4 border w-1/2 text-lg placeholder:text-base py-2' required type='text' placeholder='Last name'/>
    </div>
   
    <h3 className='text-xl font-medium mb-5'>What&apos;s your email</h3>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2' required type='email' placeholder='email@example.com'/>
    <h3 className='text-xl font-medium mb-5'>Enter Password</h3>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 border w-full text-lg placeholder:text-base py-2' required type='password' placeholder='password'/> 
    <button className='bg-[#111] text-[#fff] mt-5 rounded px-4 border w-full text-lg placeholder:text-base py-2'>Login</button>
    <p className='text-center mt-3'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
    </form>
    </div>
   <p className='text-xs leading-tight'>By proceeding, you consent to get calls, whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided</p>
</div>
    </div>
  )
}

export default UserSignup