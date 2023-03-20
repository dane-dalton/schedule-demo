import React from 'react'
import { useState } from 'react'

import { logo, menu, close } from '../assets'

import { classNames } from '../util'

import { navLinks, parents } from '../constants'

function Navbar() {
  const [toggle, setToggle] = useState(false)

  function messageNotificationLogic(nav) {
    return ((nav.title == 'Profile') && (parents[0].messages.length > 0))
  }

  return (
    <nav className='w-full flex flex-wrap py-6 justify-between items-center navbar'>
      <img src={logo} alt="Adventures with Mr. Math Pi-rate Ship" className='w-[256px] h-[64px]' />
      {/*<h1 className='font-bold text-[24px]'>Welcome, ______</h1>*/}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={classNames(
              'font-normal text-[16px] cursor-pointer flex',
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            )}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
            <div className={classNames(
              messageNotificationLogic(nav) && 'bg-red-600 text-white font-semibold text-sm w-5 h-5 rounded-full relative -top-2 right-2 flex justify-center items-center'
            )}>
              <div>{messageNotificationLogic(nav) && parents[0].messages.length}</div>
            </div>
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
        <div className={classNames(
          !toggle && parents[0].messages.length > 0 && 'bg-red-600 text-white font-semibold text-sm w-5 h-5 rounded-full relative -top-3 right-2 flex justify-center items-center'
        )}>
          <div>{!toggle && parents[0].messages.length > 0 && parents[0].messages.length}</div>
        </div>
        <div
          className={classNames(
            toggle ? 'flex' : 'hidden',
            'p-6 absolute bg-slate-300 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl '
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