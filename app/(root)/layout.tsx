import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            <div className='px-5'>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default RootLayout