import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: About Us */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo non est maximus suscipit.</p>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">123 Street, City Name</p>
                        <p className="text-sm">Email: info@example.com</p>
                        <p className="text-sm">Phone: +123 456 7890</p>
                    </div>

                    {/* Column 3: Links */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm">Home</a></li>
                            <li><a href="#" className="text-sm">Services</a></li>
                            <li><a href="#" className="text-sm">About</a></li>
                            <li><a href="#" className="text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Social Links */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-sm hover:text-gray-400 transition duration-300">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
