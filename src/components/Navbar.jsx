import React from 'react'
import { useState } from 'react'

import { logo, menu } from '../assets'

import { navLinks } from '../constants'

function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex flex-wrap py-6 justify-between items-center navbar'>
      <img src={logo} alt="Adventures with Mr. Math Pi-rate Ship" className='w-[496px] h-[64px]'></img>
      <h1 className='font-bold text-[24px]'>Welcome, ______</h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-normal text-[16px] cursor-pointer ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={menu}></img>
      </div>
    </nav>
  )
}

export default Navbar