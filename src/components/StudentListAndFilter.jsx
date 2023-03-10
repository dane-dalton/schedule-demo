import React from 'react'
import { useState } from 'react'

import { classNames } from '../util'

import {
  AiOutlineBorder,
  AiOutlineCheckSquare,
} from 'react-icons/ai'

function StudentListAndFilter({ student, handleSelectedStudents }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(true)

  function handleCheckBoxToggle() {
    setToggleCheckBox(prev => !prev)
  }

  return (
    <li className={classNames(
      toggleCheckBox ? 'text-gray-900' : 'text-gray-400'
    )}>
      <button
        className='flex-auto w-full flex justify-between items-center mb-4'
        onClick={() => {
          handleCheckBoxToggle();
          handleSelectedStudents(toggleCheckBox, student);
        }
        }
      >
        {
          toggleCheckBox ?
            <AiOutlineCheckSquare className='h-6 w-6' /> :
            <AiOutlineBorder className='h-6 w-6' />
        }
        <p className='font-semibold'>{student.name}</p>
        <section className='flex'>
          <p className='font-semibold'>Level: {student.level}</p>
        </section>
        <p></p>
      </button>
    </li>
  )
}

export default StudentListAndFilter