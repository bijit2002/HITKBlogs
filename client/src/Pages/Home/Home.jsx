import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


function Home() {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home