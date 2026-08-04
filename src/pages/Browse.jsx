import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'
import Row from '../components/browse/Row'
import requests from '../request'

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-netflix-gradient'>
      <Header/>
      <main className='relative pl-4 lg:pl-10 space-y-24'>
        <Banner/>
        <Row title={"Trending Now"} url={requests.fetchTrending}/>
        <Row title={"Action Movies"} url={requests.fetchActionMovies}/>
        <Row title={"Top Rated"} url={requests.fetchTopRated}/>
        <Row title={"Romance Movies"} url={requests.fetchRomanceMovies}/>
        <Row title={"Horror Movies"} url={requests.fetchHorrorMovies}/>
        <Row title={"Decumentries Movies"} url={requests.fetchDocumantaries}/>
        <Row title={"Commedy Movies"} url={requests.fetchComedyMovies}/>
      </main>
    </div>
  )
}

export default Browse