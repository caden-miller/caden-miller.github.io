import React from 'react';
// add image imports here for projects 
import placeholder from '../assets/placeholder.jpg';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'CLI Dungeon Crawler',
      codeLink: 'https://github.com/caden-miller/school-projects/tree/main/CLI%20dungeon%20crawler',
      imgStyle: 'hidden',
      textStyle: '',
      language: 'C++',
      path: 'M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z',
      fillColor: '#00599C'
    },
    {
      id: 2,
      title: 'Max Heap Implementation',
      codeLink: 'https://github.com/caden-miller/school-projects/tree/main/max-heap',
      imgStyle: 'hidden',
      textStyle: '',
      language: 'C++',
      path: 'M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z',
      fillColor: '#00599C'
    },
    {
      id: 3,
      title: 'Seam Carving',
      codeLink: 'https://github.com/caden-miller/school-projects/tree/main/seam%20carving',
      imgStyle: 'hidden',
      textStyle: '',
      language: 'C++',
      path: 'M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z',
      fillColor: '#00599C'
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
            projects.map(({id, title, codeLink, textStyle, path, fillColor}) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200 w-full h-full'>
                  
                  <div
                  className='bg-cover bg-center h-40 bg-gray-500'
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' fill='${fillColor}' viewBox='0 0 24 24'><path d='${path}'/></svg>`
                    )}")`,
                    backgroundSize: '3em',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left',
                    borderRadius: '0.5rem 0.5rem 0 0'

                  }}
                  >
                    <div className={`flex items-center justify-center text-center h-40 relative ${textStyle}`}>
                      <h3 className='text-2xl font-bold px-3'>{title}</h3>
                    </div>
                  </div>
                  <hr className='border-gray-500'/>
                  <div className='flex items-center justify-center h-20'>
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
