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
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-5'>
            I'm a National Merit Finalist from Colleyville, TX. I am a recipient of the President's Endowed Scholarship and member of Aggie Coding Club and TAMU Cybersecurity Club.
        </p>
        <br />
        <div className='flex flex-col sm:flex-row w-full h-full'>
          <div className='sm:w-1/2 text-center sm:text-left'>
            <p className='text-xl font-bold mt-2'>Completed Coursework:</p>
            {courses.map(({id, course}) => (
              <li key={id} className='hover:scale-105 duration-500 list-none text-gray-400'>{course}</li>
            ))}
          </div>
          <div className='sm:w-1/2 text-center sm:text-right'>
            <p className='text-xl font-bold mt-2'>Hobbies:</p>
            {hobbies.map(({id, hobby}) => (
                <li key={id} className='hover:scale-105 duration-500 capitalize list-none text-gray-400'>{hobby}</li>
            ))}
          </div>
          
        </div>    
      </div>
    </div>
  )
}

export default About;
