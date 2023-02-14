import React from 'react'
import Calendar from './Calendar'
import Upcoming from './Upcoming'
import { useState } from 'react'

import { AiOutlineShrink, AiOutlineExpand } from 'react-icons/ai'

function Schedule() {
  const [toggleSchedule, setToggleSchedule] = useState(false)

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div>
          <button
            type='button'
            className='-my-1.5 flex flex-1 justify-end items-center p-1.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Toggle schedule</span>
            <div onClick={() => setToggleSchedule(prev => !prev)} className='self-end'>
              {toggleSchedule ? (<AiOutlineShrink className='w-7 h-7' aria-hidden='true' />) : (<AiOutlineExpand className='w-7 h-7' aria-hidden='true' />)}
            </div>
          </button>
          <div className='mt-6'>
            {toggleSchedule ? (<Calendar />) : (<Upcoming />)}

          </div>
        </div>
      </div>

    </div>

  )
}

export default Schedule