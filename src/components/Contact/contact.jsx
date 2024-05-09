import React from 'react'
import Globe from '../images/message.gif'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
      <div className=' container w-[200%] md:w-full ' data-aos='zoom-in' data-aos-delay='50' data-aos-duration='1500'>
      <h2 className='font-[700] text-[2.5rem] mb-8 flex justify-center'>Get in touch</h2>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px] border-2  rounded-l-[10px] flex justify-center'>
            <img src={Globe} className='h-full'/>
          </div>

          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-r-[10px]'>
            <form action="contact.php"className='w-full '>
              <div className='mb-5'>
                <input type="text" placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className='mb-5'>
                <input type="text" placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className='mb-5'>
                <input type="text" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>
              <div className='mb-5'>
                <input type="text" rows={3} placeholder='Write your message' className='w-full p-3 focus:outline-none rounded-[8px]' />
              </div>

              <button className='w-full p-3 focus:outline-none rounded-[5px] bg-secondaryBg text-white text-center'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
