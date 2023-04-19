import React from 'react'
import Sidenav from './components/Sidenav'
import GaugeChart from './components/GaugeChart'


//styles
import '../styles/globals.css'
import AlarmCard from './components/AlarmCard'
import Consumption from './components/Consumption'


function page() {
    return (
        <div className='flex flex-row z-0'>
            <Sidenav />
            <div className='flex flex-1 flex-col h-screen bg-[rgb(36,36,36)] pt-5'>
                <div className='flex flex-1 flex-row justify-around items-center pt-10 relative'>

                    <GaugeChart period='Today' amount={50} />
                    <GaugeChart period='This week' amount={300} />
                    <GaugeChart period='This month' amount={900} />

                </div>

                {/* <div className='flex flex-1 relative'>
                    <AlarmCard />
                </div> */}

                <div className='flex flex-auto justify-center items-center'>
                    <Consumption />

                </div>
            </div>
        </div>
    )
}

export default page