import React from 'react';
import CurvyBackground from '../assets/curvyBackground.svg';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className="relative bg-[#0d0c3d] text-white py-10">
      <img
        src={CurvyBackground}
        alt="Curvy Background"
        className="absolute top-0 left-0 w-screen h-[500px] object-cover"
/>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full px-6 mb-6 items-center">
          <h2 className="text-xl font-bold mb-2 text-left">Build your online presence today</h2>
          <p className="mb-4 text-left">
            Get in touch with us today to explore your future on the internet
          </p>
          <button className="bg-black text-white px-5 py-2 rounded mb-4 hover:bg-gray-800">
            Contact Us
          </button>
        </div>
        <div className="w-full px-6 mb-4 flex justify-end">
          <div className="text-right">
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" /> contact@xaorex.com
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> 0118 9999 999
            </p>
          </div>
        </div>
        <div className="w-full border-t border-gray-700 pt-4 flex justify-around">
          <div className="text-center">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p>Monday to Friday, 9AM to 5PM</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Blogs</h3>
            <p>What is SEO?</p>
            <p>Why is a website necessary in 2025?</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Social Media</h3>
            <div className="flex flex-col space-x-2">
              <button className="flex items-center bg-[#E1306C] text-white px-4 py-1 rounded-full mb-2">
                <FaInstagram className="mr-2" /> Instagram
              </button>
              <button className="flex items-center bg-[#3b5998] text-white px-4 py-1 rounded-full mb-2">
                <FaFacebook className="mr-2" /> Facebook
              </button>
              <button className="flex items-center bg-[#25D366] text-white px-4 py-1 rounded-full">
                <FaWhatsapp className="mr-2" /> Whatsapp
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4">© 2024 - XAOREX</p>
      </div>
    </div>
  );
}

export default Footer;
