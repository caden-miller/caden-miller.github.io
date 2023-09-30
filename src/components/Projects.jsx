import React from 'react';
// add image imports here for projects 
import placeholder from '../assets/placeholder.jpg';

const Projects = () => {

  const projects = [
    {
      id: 1,
      src: placeholder
    },
    {
      id: 2,
      src: placeholder
    },
    {
      id: 3,
      src: placeholder
    },
    {
      id: 4,
      src: placeholder
    },
    {
      id: 5,
      src: placeholder
    },
    {
      id: 6,
      src: placeholder
    },
  ]

  return (
    <div name='projects' className='flex bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({id, src, codeLink}) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center '>
                    <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                      <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>
                  </div>
                </div>
              
            ))
          }
        </div>
        

      </div>
    </div>
  )
}

export default Projects;
