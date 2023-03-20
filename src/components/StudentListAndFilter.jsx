import React from 'react'
import { useState } from 'react'

import { classNames } from '../util'

import {
  AiOutlineBorder,
  AiOutlineCheckSquare,
} from 'react-icons/ai'
import { Tooltip, Box } from '@mui/material'

function StudentListAndFilter({ student, handleSelectedStudents }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(true)

  function handleCheckBoxToggle() {
    setToggleCheckBox(prev => !prev)
  }

  return (
    <li className={classNames(
      toggleCheckBox ? 'text-gray-900' : 'text-gray-400',
      'hover:border-dashed hover:border-4 hover:border-gray-300 py-2 px-4 rounded-lg mb-2'
    )}>
      <button
        className='flex-auto w-full flex flex-col justify-center'
        onClick={() => {
          handleCheckBoxToggle();
          handleSelectedStudents(toggleCheckBox, student);
        }}
      >
        <section className='flex justify-around items-center w-full'>
          {toggleCheckBox
              ?
              <Tooltip title="Hide Student">
                <Box>
                  <AiOutlineCheckSquare className='h-6 w-6' />
                </Box>
              </Tooltip>
              :
              <AiOutlineBorder className='h-6 w-6' />
          }
          <p className='font-semibold'>{student.name}</p>
          <p className='font-semibold'>Level: {student.level}</p>
        </section>
        <p className='font-semibold mx-auto'>Teacher: {student.teacher}</p>
      </button>
    </li>
  )
}

export default StudentListAndFilter