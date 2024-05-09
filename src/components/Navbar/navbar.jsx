import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const[open, setOpen] = useState(false)

  const handleClick = e=>{
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top:location - 80,
      left: 0,
    })
  }


  return (
    <div >
    <nav className=' h-16 w-full fixed top-0 left-0 bg-lightBg' style={{ zIndex: 99 }}>
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
        <div className=' font-bold cursor-pointer flex items-center pt-1.5'>
          Code with Archie
        </div>
        <div onClick={()=>setOpen(!open)}className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden '>
        {open ? <IoClose /> :<IoMenu />}
        </div>
        <ul className={`md:flex md:items-center md:my-0 pt-1.5 md:pb-0 pb-12 absolute md:relative z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  bg-lightBg block border-b-black ${open ? 'p-4' : 'hidden'}`}>
          <li className=' md:ml-8 md:my-0 my-7 cursor-pointer z-50'>
            <a onClick={handleClick} href='#home'>Home</a>
          </li>
          <li className=' md:ml-8 md:my-0 my-7 cursor-pointer z-50'>
            <a onClick={handleClick} href='#projects'>Projects</a>
          </li>
          <li className=' md:ml-8 md:my-0 my-7 cursor-pointer z-50'>
          <a onClick={handleClick} href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      
    </nav>



    </div>
  )
}

export default Navbar
