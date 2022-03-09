import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
// import { useSession } from 'next-auth/react';
// import { useState, useEffect } from 'react';

const Post = ({id,shopName,shopImg,img,caption}) => {
  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* img */}
        <img src={img} alt="" className="object-cover w-full" />
        {/* Button */}
        <div className=" flex justify-between px-4 pt-4">
            <div className="flex space-x-4 ">
                <HeartIcon className='btn'/>
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn rotate-45'/>
            </div>
            <BookmarkIcon className='btn'/>
        </div>
        {/* header */}
        <div className="flex items-center p-5 truncate ">
            <img src={shopImg} alt="" className=" rounded-full h-12 w-12 object-contain border p-1 mr-3" />
              <p className="flex-1 font-bold">{shopName}</p>
              <DotsHorizontalIcon className='h-5'/>
        </div>
        {/* caption */}
        <p className="px-10 pb-5 truncate">
              <span>{caption}</span>
        </p>
        {/* comments */}
        {/* inputbox */}
        <form action="" className="flex items-center p-4">
              <EmojiHappyIcon  className='h-7'/>
              <input type="text"
                  className=' border-none flex-1 focus:ring-0 outline-none'
                  placeholder='コメントを残す' />
              <button className=' text-blue-400 font-semibold'>送信</button>

        </form>

    </div>
  )
}

export default Post
