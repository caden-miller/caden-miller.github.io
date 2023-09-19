import React from 'react';

const About = () => {

  const courses = [
    {
      id: 1,
      course: "Data Structures and Algorithms",
    },
    {
      id: 2,
      course: "Discrete Structures for Computing",
    },
    {
      id: 3,
      course: "Introduction to Program Designs and Concepts",
    },
    {
      id: 4,
      course: "Electric Circuit Theory",
    },
    {
      id: 5,
      course: "Introduction to Digital Systems Design",
    },
    {
      id: 6,
      course: "Principles of Statistics",
    },
    {
      id: 7,
      course: "Differential Equations"
    }
  ]

  const hobbies = [
    {
      id: 1,
      hobby: "cooking",
    },
    {
      id: 2,
      hobby: "thrifting",
    },
    {
      id: 3,
      hobby: "music production",
    },
    {
      id: 4,
      hobby: "valorant",
    },
  ]

  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-5'>
            I currently am pursuing a Computer Engineering degree at Texas A&M University - College Station with an expected graduation date of 2025. I am interested in anything that has the potential to change the world through software.
        </p>
        <br />
        <div className='flex flex-row w-full h-full'>
          <div className='pr-2 w-1/2'>
            <p className='text-xl font-bold mt-2'>Completed Coursework:</p>
            {courses.map(({id, course}) => (
              <li key={id} className='hover:scale-105 duration-500 md:list-none text-gray-400'>{course}</li>
            ))}
          </div>
          <div className='w-1/2 text-right'>
            <p className='text-xl font-bold mt-2'>Hobbies:</p>
            {hobbies.map(({id, hobby}) => (
                <li key={id} className='hover:scale-105 duration-500 capitalize md:list-none text-gray-400'>{hobby}</li>
            ))}
          </div>
          
        </div>    
      </div>
    </div>
  )
}

export default About;
