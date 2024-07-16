"use client"
import React from 'react'
import doctorGroup from "../public/svg/doctor-group.svg"
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { _routes } from '@/constants'

const Hero = () => {
    const router = useRouter()
    return (
        <section className='mx-auto w-fit h-fit flex flex-col gap-10 xl:flex-row xl:gap-8'>

            <div className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-6 text-center lg:px-20">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
                                Accurate & Reliable Blood Tests
                            </h1>
                            <p className="mt-6 text-lg text-gray-600">
                                Get your blood tests done with utmost precision and care. Our lab ensures accurate and timely results for better health management.
                            </p>
                            <div className="mt-8 flex justify-center lg:justify-start">
                                <Button
                                    onClick={() => router.push(_routes.book_your_test_today)}
                                    className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium py-6 px-12 rounded-lg shadow-lg transition duration-300"
                                >
                                    Book Now
                                </Button>
                                <Button className="ml-4 px-12 py-6 bg-gray-200 text-gray-800 rounded-md text-lg font-medium hover:bg-gray-300">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-1/2">
                            <img src={doctorGroup.src} alt="Blood Test" className="w-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero