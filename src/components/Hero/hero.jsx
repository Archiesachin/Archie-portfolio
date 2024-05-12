import React from 'react'
import profile from '../images/pfp-edit.png'
import { CiMail } from "react-icons/ci"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Hero = () => {
  return (
    <section className='pt-0 mt-4 ' id='home'>
      <div className='pt-14 w-[200%] flex justify-center md:w-full'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className='w-[500px]  items-center justify-center text-left flex-col  p-16 pt-0 z-[-1] md:w-full sm:w-full '>
            <h5 data-aos='fade-right' data-aos-duration='1500' className='font-[600] text-[20px]'>Hello everyone</h5>
            <h1 data-aos='fade-up' data-aos-duration='1500' className='font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 '>I'm Archie Shah <br/>Frontend Developer
            </h1>
            <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'
            className='flex items-center gap-6 mt-7  '>
              <a href='#contact'>
                <button className='bg-secondaryBg text-white flex font-[500] items-center gap-2 py-2 px-4 rounded-[8px]'>
                <CiMail /> Hire me
                </button>
              </a>
              <a href='https://drive.google.com/file/d/180ocon_ZAvU3fMbOTFNEwjG_5q-dP34n/view?usp=sharing' className='font-[600] text-[16px] border-b border-solid-secondaryBg py-2'>
                Download Resume
              </a>

            
            </div>

            <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 font-[500] text-[15px] leading-7  sm-pr-10 mt-14'>I'm a passionate third-year IT engineering student with a strong interest in Frontend Development. I'm a quick learner who thrives on challenges and loves diving into new technologies. Explore my portfolio to see my projects and how I bring ideas to life on the web!</p>

            <div className='flex items-center gap-9 mt-14 '>
              <span className='text-[18px] font-[600] '>Follow me:</span>
              <span>
                <a href="https://www.youtube.com/channel/UC6SXq1UpxNPx59G5oCWY00g" className='text-[20px] font-[600] cursor-pointer '><FaYoutube /></a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/archie-shah-22b35124a/" className='text-[20px] font-[600]  cursor-pointer'><FaLinkedin /></a>
              </span>
              <span>
                <a href="" className='text-[20px] font-[600]  cursor-pointer'><FaInstagramSquare /></a>
              </span>
              <span>
                <a href="https://github.com/Archiesachin" className='text-[20px] font-[600]  cursor-pointer '><FaSquareGithub /></a>
              </span>
            </div>
          </div>


          <div className='basis-1/3 mt-10 sm:mt-0 sm:flex sm:justify-center'>
            <figure className='flex items-center justify-center h-[500px] bg-secondaryBg rounded-[50%] w-[500px]'>
              <img src={profile} alt='Hero-img'/>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
