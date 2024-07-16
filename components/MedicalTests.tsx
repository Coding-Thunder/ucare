"use client"
import { tests } from '@/constants';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

//  swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MedicalTests = () => {
    return (
        <main>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-5xl mb-12">
                        Our Medical Tests
                    </h2>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={2}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="testimonial-swiper"
                    >
                        {tests.map((test, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                                    <img
                                        src={test.img}
                                        alt={test.label}
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{test.label}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </main>
    );
};

export default MedicalTests;
