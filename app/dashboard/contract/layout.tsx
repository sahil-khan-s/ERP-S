import React from 'react'
import Contract from './page'
import Nav from '../components/common/nav'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-white p-5'>
            <Nav />
            {children}
        </div>
    )
}

export default layout