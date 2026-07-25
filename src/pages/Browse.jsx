import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-netflix-gradient'>
      <Header/>
      <main className='relative pl-4 lg:pl-10 space-y-24'>
        <Banner/>
      </main>
    </div>
  )
}

export default Browse