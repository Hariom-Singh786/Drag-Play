import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
            <div className='absolute top-[5%] w-full py-10 flex justify-center text-orange-700	 text-xl font-semibold'>Let's Play 😃</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-800'>
            Dragger
            </h1>
        </div>
    </>
  )
}

export default Background