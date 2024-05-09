import React from 'react'
import portfolios from '../data/portfolioData'

const Modal = ({activeID, setShowModal}) => {

  const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-40 '>
      <div className='max-w-[450px] absolute top-1/2 left-1/2 x-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <figure>
          <img className='rounded-[8px]' src={portfolio.imgUrl}/>
        </figure>

        <div>
        <h2 className='text-2xl font-[700] mt-2 '>{portfolio.title}</h2>
      </div>
      <p className='text-[15px] leading-7 '>{portfolio.description}</p>
      <div className='mt-5 flex items-center gap-3 flex-wrap'>
        <h4 className='text-[15px] text-[700]'>Technologies:</h4>
        {
          portfolio.technologies.map((item, index)=>(
          <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[12px] leading-0'>{item}</span>
        ))
        }
      </div>

      <a href={portfolio.siteUrl}>
        <button className='bg-lightBg text-white py-1.5 px-4 my-8 rounded-[8px] font-[500] '>Open Site</button>
      </a>

      <button onClick={() => setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] text-[25px] right-[1.7rem] flex items-center justify-center rounded-[3px] leading-0'>&times;</button>
      </div>



      
    </div>
  )
}

export default Modal
