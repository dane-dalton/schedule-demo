import React from 'react'

import {
  AiOutlineBorder,
  AiOutlineCheckSquare,
} from 'react-icons/ai'

function StudentListAndFilter({ student }) {
  return (
    <button className='flex-auto grid grid-cols-2 justify-items-center'>
      <p className='text-gray-900 font-semibold'>{student.name}</p>
      <p className='self-center'>{student.level}</p>
      <div>
        <p className='text-gray-900'>
          {' CST - '}
        </p>
        <p className='text-gray-900'>
          {' CST'}
        </p>
      </div>
    </button>
  )
}

export default StudentListAndFilter