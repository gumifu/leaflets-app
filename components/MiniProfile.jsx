import React from 'react'

const MiniProfile = () => {
  return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <div>
                <img src='/gs-logo.png'
                    alt='dummy profile' className=' h-16 w-16 object-cover rounded-full cursor-pointer border p-[2px]' layout='fill' />
            </div>
            <div className='flex-1 mx-4'>
                <h2 className='font-bold text-white'>gs</h2>
                <h3 className='text-sm text-gray-400'>Welcome to leaflets</h3>
            </div>
          <button
            //   onClick={signOut}
              className='text-blue-400 text-sm font-semibold'>サインアウト</button>
        </div>
  )
}

export default MiniProfile
