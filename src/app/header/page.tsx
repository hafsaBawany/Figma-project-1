import React from 'react';
import Image from 'next/image';

const Design = () => {
  return (
    <div className='h-screen'>
      
      <header className="w-full h-[134px] bg-[#A29875] flex items-center justify-start pl-{2px}">
        <span className="w-[439px] h-[94px] text-white text-6xl pl-{2px}">
        MANZZARI
        </span>
      </header>

  
      <div className="flex justify-center items-center m-12 space-x-12"> 
        
        
        <div className="flex flex-col justify-center items-start">
          <h1 className='w-[496px] h-[189px] text-black text-6xl'>
            IMPACCABLE CRAFTMANSHIP AND FINNES
          </h1>
          <p className='w-[902px] h-[147px] text-black text-2xl text-[#A29875]'>
            an example of intricate workmanship and detail elegent necklaces and long and short chains form a part of our desireable collection.
          </p>

          <button className="w-[288px] h-[58px]  top-[730px] left-[176px] rounded-[10px] bg-[#A29875] text-white">
            Explore Now
 
        </button>

        </div>

        
        <div className="flex justify-center items-center">
          <Image
            src={"/images/figma.png"}
            alt="hero image"
            width={462}
            height={647}
          />
        </div>
      </div>
    </div>
  );
};



export default Design;

