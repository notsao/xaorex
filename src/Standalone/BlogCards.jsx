import React from 'react';
import User from '../assets/user.svg';
function Card({ icon, title, description, author, url}) {
  return (
    <div className="flex flex-col items-center bg-white p-7 rounded-[31px] shadow-md w-1/4 h-[700px]justify-around">
      <div className="items-center justify-center mb-4">
        <img src={icon} alt={title} className="text-left" />
        <div className='flex flex-row items-center justify-start mx-5 mt-2'>
          <img src={User} alt={author} className="text-left mr-2" />
          <p className="text-left text-black text-sm italic font-bold">Author: {author}</p>
        </div>
        <h3 className="text-3xl mt-2 font-bold text-black ">{title}</h3>
      </div>
      <p className="text-center text-black mx-[5px] text-left">{description}</p>
      <a href={url} className="text-white bg-black px-5 py-2 rounded mt-5 hover:bg-gray-800">Read More</a>
      
    </div>
  );
}

export default Card;