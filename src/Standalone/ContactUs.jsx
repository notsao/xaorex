import { useState } from 'react';
import emailimg from '../assets/email.svg'

function ContactUs() {

    const [email, setEmail] = useState('')  

    const handleChange = (e) => {
        setEmail(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Submitted Email:', email)
        //inset API POST request to DB to store data
    }

    return (
        <div className="flex justify-center items-center my-10">
            <div className="w-1/2 h-auto flex flex-row justify-center items-center space-x-0 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 rounded-tr-[50px] rounded-bl-[50px] p-10">
                <div className="flex flex-col">
                    <div className='font-extrabold text-3xl md:text-5xl text-white mb-4'> Still have questions?</div>
                    <div className='text-lg md:text-xl text-white mb-6'> Input your email and we will get back to you swiftly!  </div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                        <input 
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        className=' bg-[#875EFF] text-white p-3 rounded-md focus:border-white focus:ring-2 focus:ring-white focus:outline-none w-full sm:w-[400px] mb-4 sm:mb-0'
                        />
                        <button className='bg-[#101066] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2525AA] transition-all w-full sm:w-auto'> Submit </button>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex justify-center items-center'> 
                <img src={emailimg}
                alt="Email illustration"
                className="w-[250px] h-auto object-contain" /> </div>
            </div>
        </div>
    )
}

export default ContactUs