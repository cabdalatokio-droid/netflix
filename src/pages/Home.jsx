import React from 'react'
import HomeHero from '../components/HomeHero';
import Features from '../components/features/Features';
import Faqs from '../components/faqs/Faqs';

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <Features/>
      <Faqs/>
    </div>
  )
}

export default Home