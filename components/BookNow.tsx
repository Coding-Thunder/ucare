"use client"
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { _routes } from '@/constants';

const BookNow = () => {
    const router = useRouter()
    return (
        <section className="bg-gray-100 py-20 lg:py-24">
            <div className="container mx-auto px-6 lg:px-20 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                    Get Your Test Done Today
                </h2>
                <p className="text-lg text-gray-700 mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo non est maximus suscipit.
                </p>
                <Button
                    onClick={() => router.push(_routes.book_your_test_today)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg shadow-lg transition duration-300"
                >
                    Book Now
                </Button>
            </div>
        </section>
    );
};

export default BookNow;
