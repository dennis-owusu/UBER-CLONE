import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://media.istockphoto.com/id/1300786492/photo/view-of-city-traffic-with-traffic-lights-in-the-foreground-a-semaphore-with-a-red-light.jpg?s=1024x1024&w=is&k=20&c=2WriqQlqDA3vcJ-V4L5FqIXh5UElS829Vc8rBsA_nwE=)] h-screen pt-5 flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'/>
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='inline-block text-center justify-center items-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home