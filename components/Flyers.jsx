import React from 'react'
import Stories from './Stories'

const Flyers = () => {
  return (
    <main className=' grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
        {/* section */}
        <section className='col-span-2'>
        {/* Stories */}
        <Stories/>
        {/* Pots */}
        </section>
        {/* MiniProfile */}
        {/* Suggestion */}
    </main>
  )
}

export default Flyers
