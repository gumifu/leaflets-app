import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/solid';
// import { useSession,signIn,signOut } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { modalState } from "../atoms/modalAtom";
// import { useRecoilState } from "recoil";

const Header = () => {
  return (
          <div className='shadow-xl border-b sticky top-0 z-50'>
      <div className='flex items-center justify-between m-w-6xl bg-black'>
          {/* left */}
          <div className=" relative w-24 h-24 hidden lg:inline-grid cursor-pointer">
            <Image src='/logo-main-white.svg' layout='fill' className='' objectFit='contain'/>
          </div>
          <div className=" relative w-16 h-16 lg:hidden flex-shrink-0 cursor-pointer">
            <Image src='/logo-mark-white.svg' layout='fill' className='' objectFit='contain'/>
      </div>

          {/* middle */}
      <div className='relative mt-1 p-3 rounded-md max-w-xs '>
                    <div className='absolute inset-y-0 pl-3 flex items-center'>
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input className=' h-14 bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-blue-100 rounded-full' type="text" placeholder='検索'/>
      </div>

      {/* right */}
      <div className="flex items-center mr-5 justify-end space-x-4">
        <HomeIcon className='navBtn text-white'/>
        <MenuIcon className='h-6 md:hidden cursor-pointer text-white'/>
        <div className='relative navBtn'>
                                <PaperAirplaneIcon className='navBtn rotate-45 text-white' />
                                    <div className=' absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white'>3</div>
                                </div>
        <PlusCircleIcon className='navBtn text-white '/>
        <UserGroupIcon className='navBtn text-white'/>
        <HeartIcon className='navBtn text-white' />
        <UserCircleIcon className='navBtn text-gray-300' />
        <img
          // onClick={signOut}
          // src={session.user.image}
          src='/logo-mark-white.svg'
          alt='dummy profile'
          className='h-10 w-10 object-cover rounded-full cursor-pointer bg-slate-400 '
          />
      </div>
    </div>
    </div>
  )
}

export default Header
