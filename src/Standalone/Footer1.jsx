import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import footersvg from '../assets/curvybackground.svg'; // Assuming the SVG file is properly imported

const Footer1 = () => {
    return (
        <footer // Set the SVG as the background image
        >
            <div className="container mx-auto px-4 py-10">
            <img
        src={footersvg}
        alt="Curvy Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
                <h2 className="text-2xl font-bold text-center">
                    Build your online presence today
                </h2>
                <p className="text-center text-gray-300 mt-2">
                    Get in touch with us today to explore your future on the internet.
                </p>
                <div className="text-center mt-6">
                    <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
                        Contact Us
                    </button>
                </div>
                <hr className="my-10 border-bg-main " />
                <div className="flex flex-wrap justify-between">
                    {/* Office Hours */}
                    <div>
                        <h3 className="text-lg font-semibold">Office Hours</h3>
                        <p className="mt-2 text-white">Monday to Friday, 9AM to 5PM</p>
                    </div>

                    {/* Blogs */}
                    <div>
                        <h3 className="text-lg font-semibold">Blogs</h3>
                        <ul className="mt-2 text-white">
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    What is SEO?
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Why is a website necessary in 2025?
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold">Social Media</h3>
                        <div className="flex mt-2 gap-4">
                            <a href="#" className="flex items-center gap-2 text-pink-500">
                                <FaInstagram /> Instagram
                            </a>
                            <a href="#" className="flex items-center gap-2 text-blue-500">
                                <FaFacebook /> Facebook
                            </a>
                            <a href="#" className="flex items-center gap-2 text-green-500">
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-10 border-bg-main" />
                <p className="text-center text-white">© 2024 · XAOREX</p>
            </div>
        </footer>
    );
};

export default Footer1;
