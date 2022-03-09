import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Flyers = () => {
  return (
    <main className=' grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        {/* section */}
      <section className='col-span-2'>
        {/* Stories */}
        <Stories/>
        {/* Pots */}
        <Posts/>
      </section>

      <section className='hidden xl:inline-grid md:col-span-1'>
        {/* MiniProfile */}
        <MiniProfile/>
        {/* Suggestion */}
        <Suggestions/>
      </section>
    </main>
  )
}

export default Flyers
