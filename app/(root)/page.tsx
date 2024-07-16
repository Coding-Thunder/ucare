import BookNow from '@/components/BookNow'
import Hero from '@/components/Hero'
import MedicalTests from '@/components/MedicalTests'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const RootPage = () => {
    return (
        <main className='min-h-screen max-h-fit'>
            <Hero />
            <WhyChooseUs />
            <Testimonials />
            <MedicalTests />
            <BookNow />
        </main>
    )
}

export default RootPage