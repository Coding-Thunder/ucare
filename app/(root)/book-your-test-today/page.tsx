import React from 'react';

const BookTest = () => {
    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Book Your Test</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            placeholder="Your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            placeholder="Your phone number"
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Time Slot
                        </label>
                        <select
                            id="time"
                            name="time"
                            autoComplete="time"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                            <option value="evening">Evening (3 PM - 6 PM)</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="test" className="block text-sm font-medium text-gray-700">
                            Test
                        </label>
                        <select
                            id="test"
                            name="test"
                            autoComplete="test"
                            required
                            className="p-3 mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 3</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookTest;
