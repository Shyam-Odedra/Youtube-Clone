import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomeFeed from './HomeFeed/HomeFeed';
import './Home.css';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row flex-1'>
      <Sidebar />
      <div className="homepage">
        <HomeFeed />
      </div>
    </div>
  )
}
