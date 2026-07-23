import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-gradient-to-b'>
      <Header/>
      <main>
        <Banner/>
      </main>
    </div>
  )
}

export default Browse