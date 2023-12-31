import React from 'react';
import SelfImage from '../assets/selfImage.jpg';
import {RxArrowRight} from 'react-icons/rx';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[30%] sm:pt-0'>


        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Software Engineer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I'm currently pursuing a Computer Engineering degree at Texas A&M University - College Station with an expected graduation date of May 2025. I'm interested in anything that has the potential to change the world through software.
                </p>

                <div>
                    <Link 
                        to='projects'
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                    >
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <RxArrowRight size={15} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={SelfImage} alt="my portrait" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home;
