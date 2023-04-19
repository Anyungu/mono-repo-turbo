'use client'

import React from 'react'
import { SearchSelect } from 'ui'


function Sidenav() {
    return (
        <div className='flex flex-col h-screen bg-[rgba(36,36,36,0.2)] px-5 py-5 w-64'>

            <SearchSelect label="Search for a water meter" />

        </div>
    )
}

export default Sidenav