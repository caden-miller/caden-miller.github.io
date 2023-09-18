import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni soluta non ipsa eum maxime facilis dicta quasi voluptatibus? Assumenda commodi repellat aperiam hic nihil soluta doloribus minima rerum nisi!
        </p>
        <br />

        <p className='text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates est id eaque doloremque unde nobis, aspernatur non eveniet beatae ratione a voluptatem ea fugiat reprehenderit vel dolores quaerat ipsum labore blanditiis magni libero itaque animi veritatis. Cum, velit! Repudiandae perferendis culpa ad praesentium numquam id dolorem dignissimos soluta distinctio explicabo?
        </p>
      </div>
    </div>
  )
}

export default About;
