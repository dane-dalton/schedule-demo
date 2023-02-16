import React from 'react'
import { useState } from 'react'

import { logo, menu, close } from '../assets'

import { classNames } from '../util'

import { navLinks } from '../constants'

function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex flex-wrap py-6 justify-between items-center navbar'>
      <img src={logo} alt="Adventures with Mr. Math Pi-rate Ship" className='w-[256px] h-[64px]' />
      {/*<h1 className='font-bold text-[24px]'>Welcome, ______</h1>*/}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={classNames(
              'font-normal text-[16px] cursor-pointer',
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            )}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
        />
        <div
          className={classNames(
            toggle ? 'flex' : 'hidden', 
            'p-6 absolute bg-slate-400 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar'
          )}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={classNames(
                  'font-normal text-[16px] cursor-pointer',
                  i === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                )}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar