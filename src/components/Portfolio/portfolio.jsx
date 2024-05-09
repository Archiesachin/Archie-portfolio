import React, {useEffect, useState} from 'react'
import data from '../data/portfolioData'
import Modal from '../Modal/modal'

const Portfolio = () => {

  const [selectTab, setSelectTab] = useState('all')
  const [portfolio, setPortfolios] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const[activeID, setActiveID] = useState(null)


  const showModalHandler = id=>{
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(()=>{

    if(selectTab ==='all'){
      setPortfolios(data)
    }

    if(selectTab ==='Personal'){
      const filteredData = data.filter(item => item.category === 'Personal')
      setPortfolios(filteredData)
    }

    if(selectTab ==='Hackathon'){
      const filteredData = data.filter(item => item.category === 'Hackathon')
      setPortfolios(filteredData)
    }

  }, [selectTab])

  return (
    <section id='projects' className='w-[200%]  md:w-full '>
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap pl-18'>
          <div className='mb-7 sm:mb-0 flex justify-center items-center'>
            <h3 className='text-[2rem] font-[700]'>My Recent Projects</h3>
          </div>

          <div className='flex gap-3'>
            <button onClick={() => setSelectTab('all')} className='border border-solid border-lightBg py-2 px-4 rounded-[8px]'>All</button>
            <button onClick={() => setSelectTab('Personal')} className='border border-solid border-lightBg py-2 px-4 rounded-[8px]'>Personal</button>
            <button  onClick={() => setSelectTab('Hackathon')} className='border border-solid border-lightBg py-2 px-4 rounded-[8px]'>Hackathons</button>
          </div>

          <div className='flex items-center gap-4 flex-wrap mt-12'>
            {
              portfolio?.map((portfolio,index)=>(
                <div data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[48.8%] lg:w-[32.2%] relative z-[1] bg-[#7C5896] md:h-[250px]  h-[450px] flex items-center justify-center rounded-[8px]  text-center'>
                  <figure className=''>
                    <img className='w-[90%] m-auto' src={portfolio.imgUrl} alt=''/>
                  </figure>

                  <div className='w-full h-full bg-lightBg bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                    <div className='w-full h-full flex items-center justify-center'>
                    <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-black  py-3 px-4 rounded-[8px] font-[500] ease-in duration-200 '>See Details</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>


      </div>

      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
      }

    </section>
  )
}

export default Portfolio
