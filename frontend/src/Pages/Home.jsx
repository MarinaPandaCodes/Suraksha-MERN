import React from 'react'
import Header from '../components/Header'
import SpeciallityMenu from '../components/SpeciallityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'



const Home = () => {
  return (
    <div>
      <Header />
      <SpeciallityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home
