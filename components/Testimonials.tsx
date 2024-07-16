"use client"
import { testimonials } from '@/constants';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonials = () => {
    return (
        <main>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-5xl mb-12">
                        What Our Customers Say
                    </h2>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full mx-auto"
                                    />
                                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </main>
    )
}

export default Testimonials