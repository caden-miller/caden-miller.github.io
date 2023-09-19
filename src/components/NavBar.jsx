import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 2,
            link: 'projects'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10'>
        <div className='flex flex-col items-center capitalize'>
            <h1 className='text-6xl font-header ml-2 pt-3'>caden miller</h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (

            <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-110 duration-200 capitalize'>
               <Link to={link} smooth duration={500}>
                    {link}
                </Link>
            </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            { nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 capitalize'>
            {links.map(({id, link}) => (

            <li key={id} className='px-4 cursor-pointer py-6 text-4xl'>
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                </Link>
            </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar;
