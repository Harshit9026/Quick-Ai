import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {
    const navigate=useNavigate();
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        <div className='text-center mg-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content with <span className='text-primary'>AI Tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max:sm-text-xs text-gray-600'>Transform your content creation with our site for premium AI Tools. 
                Write articles , generate images and improve your Workflow.</p>
        </div>

        <div className='flex flex-wrap py-4 justify-center gap-4 text-sm max-sm:text-xs '>
            <button onClick={()=>navigate('/ai')}className='bg-primary text-white px-10 py-3 rounded-lg hover:sacle-102 active:scale-95 transition cursor-pointer'>Start Creating now</button>
            <button className='bg-white px-10 py-3 rounded-lg-border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch Demo</button>
        </div>

        <div className='flex items-center gap-4 mt-8 mx-auto text-gray-800'>
            <img src={assets.user_group} alt="" className='h-8'/>
            Trusted by 10k+ peoples.
        </div>
        </div>
  )
}

export default Hero