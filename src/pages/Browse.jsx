import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'
import Row from '../components/browse/Row'

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-netflix-gradient'>
      <Header/>
      <main className='relative pl-4 lg:pl-10 space-y-24'>
        <Banner/>
        <Row title={"Trending Now"} url={""}/>
        <Row title={"Action Movies"} url={""}/>
        <Row title={"Top Rated"} url={""}/>
        <Row title={"Romance Movies"} url={""}/>
        <Row title={"Horror Movies"} url={""}/>
        <Row title={"Decumentries Movies"} url={""}/>
        <Row title={"Commedy Movies"} url={""}/>
      </main>
    </div>
  )
}

export default Browse