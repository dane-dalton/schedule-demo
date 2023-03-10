import React from 'react'
import { useState } from 'react'

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
    <li>
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
            <AiOutlineCheckSquare className='h-6 w-6 text-gray-900' /> :
            <AiOutlineBorder className='h-6 w-6 text-gray-900' />
        }
        <p className='text-gray-900 font-semibold'>{student.name}</p>
        <section className='flex'>
          <p className='text-gray-900 font-semibold'>Level: {student.level}</p>
        </section>
        <p></p>
      </button>
    </li>
  )
}

export default StudentListAndFilter