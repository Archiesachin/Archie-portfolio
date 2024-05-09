import React from 'react'
import { CiMail } from "react-icons/ci"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='bg-[#12141e] pt-12 w-[203%] md:w-full'>
      <div className="container">
        <div className='sm:flex items-center justify-between md:gap-8 '>
          <div className='w-full sm:w-1/2 '>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>Do you want to make beautiful products?</h2>
            <a href='#contact'>
                <button className='bg-secondaryBg text-white flex font-[500] items-center gap-2 py-2 px-4 rounded-[8px]'>
                <CiMail /> Hire me
                </button>
              </a>
          </div>

          <div className="w-full sm:w-1/2 ">
            <p className='text-gray-300 leading-7 mt-4 sm::mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus sapiente ut ex veritatis, hic blanditiis. Maxime incidunt accusantium, repellat magni officia dolor beatae</p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className='text-gray-300 font-[600] text-[15px]'>Follow Me: </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center flex justify-center items-center'>
                <a href='https://github.com/Archiesachin' className='text-gray-300 font-[500] text-[18px]'>
                  <FaSquareGithub/>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center flex justify-center items-center'>
                <a href='https://www.linkedin.com/in/archie-shah-22b35124a/' className='text-gray-300 font-[500] text-[18px]'>
                  <FaLinkedin/>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center flex justify-center items-center'>
                <a href='' className='text-gray-300 font-[500] text-[18px]'>
                  <FaInstagramSquare/>
                </a>
              </span>

              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center flex justify-center items-center'>
                <a href='https://www.youtube.com/channel/UC6SXq1UpxNPx59G5oCWY00g' className='text-gray-300 font-[500] text-[18px]'>
                  <FaYoutube/>
                </a>
              </span>
              
            </div>
          </div>

        </div>
      </div>
      
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px] ">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex justify-center items-center'>A</span>

                <div className="leading-[20px] ">
                  <h2 className='text-gray-200 font-[500] text-[18px] '>Code with Archie</h2>
                  
                </div>
              </div>
            </div>
              <div className="">
                <p className='text-gray-400 text-[15px]'>Copyright {year} developed by Archie- All right reserved. </p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
